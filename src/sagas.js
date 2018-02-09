import {put, takeEvery, all} from 'redux-saga/effects'
import * as actionTypes from './actions/actionTypes'
import { readAsArrayBuffer } from 'promise-file-reader'
const axios = require('axios')
const deliverySDK = require('contentful');
const managementSDK= require('contentful-management')

const client = deliverySDK.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_DELIVERY_TOKEN
});
const managementClient = managementSDK.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_PUBLISH_TOKEN
  });

function* getEntrySaga(action) {
    const entry = yield client.getEntry(action.id);
    let entryFields = {}
    switch (action.contentType) {
        case 'walkthrough':
            const videoAsset = yield client.getAsset(entry.fields.video.sys.id)
            entryFields = {
                title: entry.fields.title,
                description: entry.fields.description,
                video: videoAsset.fields.file.url,
                team: entry.fields.team,
                type: entry.sys.contentType.sys.id,
                id: entry.sys.id
            };
            break;
        case 'process':
            //relevant documents not getting into state
            console.log(entry)
            let files
            if(entry.fields.relevantDocuments) {
                files = yield all(entry.fields.relevantDocuments.map((file) => {
                    return client.getAsset(file.sys.id)
                }))
            }
            entryFields = {
                title: entry.fields.title,
                purpose: entry.fields.purpose,
                responsibleIndividuals: entry.fields.responsibleIndividuals,
                relevantDocuments: files,
                handoffs: entry.fields.handoffs,
                completionDescription: entry.fields.completionDescription,
                measuresOfSuccess: entry.fields.measuresOfSuccess,
                faq: entry.fields.faq,
                team: entry.fields.team,
                type: entry.sys.contentType.sys.id,
                id: entry.sys.id
            };
            break;
        default:
            entryFields = {}
            break;
    }
    yield put({type: actionTypes.DISPLAY_ENTRY, payload: entryFields})
}

function* getEntriesSaga(action) {
    let contentType = '';
    if (action.contentType.includes('1')) { contentType = 'process' }
    if (action.contentType.includes('2')) { contentType = 'walkthrough' }
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
            team: entry.fields.team,
            type: entry.sys.contentType.sys.id
        };
    });
    yield put ({type: actionTypes.DISPLAY_SEARCH, payload: searchTitles});
}

function* createUploadSaga(action) {
    console.log(action)
    const file = action.payload.file
    const { onSuccess, onProgress, onError } = action.payload
    const fileStream = yield readAsArrayBuffer(file)
    const instance = axios.create({
        baseURL: ` https://upload.contentful.com/spaces/dbqktrvlm9hp/uploads`,
        timeout: 999999,
        Auth: process.env.publishToken,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Authorization': 'Bearer CFPAT-1f2d55a62d1a9e24ce7d15b8ea95cf0eb1ddafb6377c4e5293b9d9f42d06bec1'
        },
        onUploadProgress: 
            (event) => onProgress({ percent: Math.floor((event.loaded/event.total) * 100)}),
        onUploadError:
            (error) => onError(console.log(error))
        
    })
    console.log('uploading...')
    const upload = yield instance.post(``, fileStream)
    console.log(upload)
    const space = yield managementClient.getSpace()
    // // const upload = yield space.createUpload({
    // //     file: fileStream,
    // //     type: file.type,
    // //     fileName: file.name,
    // //     onUploadProgress: (event) => onProgress({ percent: Math.floor((event.loaded/event.total) * 100)})
    // // })
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
                        id: upload.data.sys.id
                    }
                }
            }
            }
        }
    })
    console.log('processing...')
    const processed = yield asset.processForLocale('en-US', { processingCheckWait: 2000 });
    console.log('publishing...')
    yield processed.publish()
    onSuccess(null, file)
    yield put ({type: actionTypes.QUEUE_UPLOADS, payload: asset})
}

function* createEntrySaga(action) {
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
                "en-US": action.payload.title
              },
              description: {
                "en-US": action.payload.description
              },
              video: {
                "en-US": {
                  sys: {
                    type: "Link", linkType: "Asset", id: assetID
                  }
                }
            },
              team: {
                "en-US": action.payload.team
              },
            }
          break;
        case 'process':
          let assets
          console.log(action.payload)
          if (action.payload.assets) {
            assets = action.payload.assets.map((asset) => {
            return { sys: {type: "Link", linkType: "Asset", id: asset.sys.id}}
          })
          }
          console.log(assets)
          fields = {
            title: {
                "en-US": action.payload.title
            },
            purpose: {
                "en-US": action.payload.purpose
            },
            responsibleIndividuals: {
                "en-US": action.payload.responsibleIndividuals.split()
            },
            completionDescription: {
                "en-US": action.payload.description
            },
            measuresOfSuccess: {
                "en-US": action.payload.measures.split()
            },
            relevantDocuments: {
                "en-US": assets
            },
            team: {
                "en-US": action.payload.team
            },

          }
          break
        default:
          break;
    }
    const entryCreated = yield space.createEntry(action.payload.contentType, {
        fields: fields
    })
    const publishedEntry = yield entryCreated.publish()
    console.log(publishedEntry)
    yield put({type: actionTypes.CLEAR_UPLOADS})

}

function* deleteEntrySaga(action) {
    const space = yield managementClient.getSpace()
    const entry = yield space.getEntry(action.payload)
    const unpublishedEntry = yield entry.unpublish()
    // unpublishedEntry.delete()
    yield put({type: actionTypes.CLEAR_DISPLAY})
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

function* watchDeleteEntrySaga() {

    yield takeEvery(actionTypes.DELETE_ENTRY, deleteEntrySaga)
}

export default function* rootSaga() {
    yield all([
        watchGetEntriesSaga(),
        watchGetEntrySaga(),
        watchSearchEntriesSaga(),
        watchCreateEntrySaga(),
        watchCreateUploadSaga(),
        watchDeleteEntrySaga()
    ])
}