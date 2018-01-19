import {put, takeEvery, all} from 'redux-saga/effects';
import * as actionTypes from './actions/actionTypes';
import { readAsArrayBuffer } from 'promise-file-reader';
import creds from './creds.json';
const deliverySDK = require('contentful');
const managementSDK= require('contentful-management');

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
function* createUploadSaga(action) {

    const file = action.payload.file
    const { onSuccess, onProgress } = action.payload
    const fileStream = yield readAsArrayBuffer(file)
    onProgress({ percent: 20 })
    const space = yield managementClient.getSpace()
    console.log('uploading...')
    const upload = yield space.createUpload({
        file: fileStream,
        type: file.type,
        fileName: file.name
    })
    onProgress({ percent: 45 })
    console.log('creating asset...')
    const asset = yield space.createAsset({
        fields: {
            title: {
            'en-US': file.name
            },
            file: {
            'en-US': {
                fileName: file.name,
                contentType: file.type,
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
    onProgress({ percent: 65 })
    console.log('processing...')
    onProgress({ percent: 85 })
    const processed = yield asset.processForLocale('en-US', { processingCheckWait: 2000 });
    console.log('publishing...')
    const published = yield processed.publish()
    onProgress({ percent: 100 })
    onSuccess(null, file)
    yield put ({type: actionTypes.QUEUE_UPLOADS, payload: asset})
}
function* createEntrySaga(action) {
    console.log(action)
    let assetID
    let fields
    const space = yield managementClient.getSpace()

    switch (action.payload.contentType) {
        case 'walkthrough':
          assetID = action.payload.assets[0].sys.id
          const videoAsset = yield client.getAsset(assetID)
          console.log(videoAsset)
            fields = {
                title: {
                    "en-US": action.payload.title //works
                },
                description: {
                    "en-US": action.payload.description //works
                },
                video: {
                    "en-US": {
                        sys: {
                            type: "Link", linkType: "Asset", id: assetID
                        }
                    }
                },
                team: {
                    "en-US": action.payload.team //works 
                },

            }
            break;
        case 'process':
        let assets
        if (action.payload.assets.length > 0) {
            assets = action.payloads.assets.map((asset) => {
            return assets
        })
        }
        fields = {
            title: {
                "en-US": action.payload.title //works
            },
            purpose: {
                "en-US": action.payload.purpose //works
            },
            responsibleIndividuals: {
                "en-US": action.payload.responsibleIndividuals.split() //works
            },
            completionDescription: {
                "en-US": action.payload.description //works
            },
            measuresOfSuccess: {
                "en-US": action.payload.measures.split() //works
            },
            relevantDocuments: {
                "en-US": assets
            },
            team: {
                "en-US": action.payload.team //works 
            },

        }
        default:
            break;
    }
    const entryCreated = yield space.createEntry(action.payload.contentType, {
        fields: fields
    })
    const publishedEntry = yield entryCreated.publish()
    console.log(publishedEntry)

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

function* watchCreateEntrySaga() {
    yield takeEvery(actionTypes.CREATE_ENTRY, createEntrySaga)
}

function* watchCreateUploadSaga() {
    yield takeEvery(actionTypes.CREATE_UPLOAD, createUploadSaga)
}

export default function* rootSaga() {
    yield all([
        watchGetEntriesSaga(),
        watchGetEntrySaga(),
        watchSearchEntriesSaga(),
        watchCreateEntrySaga(),
        watchCreateUploadSaga()
    ])
}