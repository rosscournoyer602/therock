import {put, takeEvery, all} from 'redux-saga/effects';
import * as actionTypes from './actions/actionTypes';
import creds from './creds.json';
import { readAsArrayBuffer } from 'promise-file-reader';
const deliverySDK = require('contentful');
const managementSDK= require('contentful-management');
const fs = require('fs');

const client = deliverySDK.createClient({
    space: creds.spaceID,
    accessToken: creds.deliveryToken
});
const managementClient = managementSDK.createClient({
    space: creds.spaceID,
    accessToken: creds.publishToken
});
//when the user click an entry, go get it from Contentful,
//look at action payload to figure out what kind of entry
//to return
function* getEntrySaga(action) {
    const entry = yield client.getEntry(action.id);
    let entryFields;
    switch (action.contentType) {
        case 'walkthrough':
            const videoAsset = yield client.getAsset(entry.fields.video.sys.id)
            entryFields = {
                title: entry.fields.title,
                description: entry.fields.description,
                video: videoAsset.fields.file.url,
                team: entry.fields.team,
                type: entry.sys.contentType.sys.id,
            };
            break;
        case 'process':
            entryFields = {
                title: entry.fields.title,
                purpose: entry.fields.purpose,
                responsibleIndividuals: entry.fields.responsibleIndividuals,
                relevantDocuments: entry.fields.relevantDocuments,
                handoffs: entry.fields.handoffs,
                completionDescription: entry.fields.completionDescription,
                measuresOfSuccess: entry.fields.measuresOfSuccess,
                faq: entry.fields.faq,
                team: entry.fields.team,
                type: entry.sys.contentType.sys.id,
            };
            break;
        default:
            entryFields = {};
            break;
    }
    yield put({type: actionTypes.DISPLAY_ENTRY, payload: entryFields});
}

function* getEntriesSaga(action) {
    let contentType = '';
    if (action.contentType.includes('1')) { contentType = 'process' };
    if (action.contentType.includes('2')) { contentType = 'walkthrough' };
    const searchObject = {
        'content_type': contentType,
        'fields.team': action.tabName
    };

    const entries = yield client.getEntries(searchObject);
    //parse what comes back into EntryCard consumable items
    const entryTitles = entries.items.map((entry) => {
        return {
            title: entry.fields.title,
            purpose: entry.fields.purpose,
            id: entry.sys.id,
            team: entry.fields.team,
            type: entry.sys.contentType.sys.id
        }
    });
    yield put({ type: actionTypes.DISPLAY_ENTRIES, payload: entryTitles });
}

function* searchEntriesSaga(action) {
    const searchResults = yield client.getEntries({query: action.payload});
    //[ISSUE] possibly redundant, could use getProcessEntries saga
    const searchTitles = searchResults.items.map((entry) => {
        return {
            title: entry.fields.title,
            purpose: entry.fields.purpose,
            id: entry.sys.id,
            team: entry.fields.team
        };
    });
    yield put ({type: actionTypes.DISPLAY_SEARCH, payload: searchTitles});
}

export function* createUploadSaga(action) {
    const dataPath = yield readAsArrayBuffer(action.payload.file);
    const type = action.payload.file.type;
    const uploadObject = {
        file: dataPath,
        type
    };
    const space = yield managementClient.getSpace();
    console.log('uploading...')
    const upload = yield space.createUpload(uploadObject)
    .then((upload) => {
      console.log('Creating asset...');
        return space.createAsset({
          fields: {
            title: {
              'en-US': action.payload.file.name
            },
                  file: {
                    'en-US': {
                      fileName: action.payload.file.name,
                      contentType: type,
                      uploadFrom: {
                        sys: {
                          type: 'Link',
                          linkType: 'Upload',
                          id: upload.sys.id
                        }
                      }
                    }
                  }
          }
        })
    })
    .then((asset) => {
        console.log('processing...');
        return asset.processForLocale('en-US', 
        { 
            processingCheckWait: 2000, 
            procesisngCheckRetries: 20 
        })
    })
    .then((asset) => {
        console.log('publishing...');
        return asset.publish();
    })
    .then((asset) => {
        console.log(asset);
        return asset;
    })
    .catch((err) => {
        console.log(err);
    })
   
    yield put ({type: actionTypes.READY_ASSETS, asset: upload})
    return upload
}

//listen for actions and call sagas
function* watchGetEntrySaga() {
    yield takeEvery(actionTypes.GET_ENTRY, getEntrySaga);
}

function* watchGetEntriesSaga() {
    yield takeEvery(actionTypes.GET_ENTRIES, getEntriesSaga);
}

function* watchSearchEntriesSaga() {
    yield takeEvery(actionTypes.SEARCH_ENTRIES, searchEntriesSaga);
}

function* watchCreateUploadSaga() {
    yield takeEvery(actionTypes.CREATE_UPLOAD, createUploadSaga);
}

export default function* rootSaga() {
    yield all([
        watchGetEntriesSaga(),
        watchGetEntrySaga(),
        watchSearchEntriesSaga(),
        watchCreateUploadSaga()
    ])
}