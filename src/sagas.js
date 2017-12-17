import {put, takeEvery, all} from 'redux-saga/effects'
import * as actionTypes from './actions/actionTypes'
import { createClient } from 'contentful'
import creds from './creds.json'

const client = createClient({
    space: creds.spaceID,
    accessToken: creds.deliveryToken
})

//when the user click an entry, go get it from Contentful
export function* getProcessEntrySaga(action) {
    const entry = yield client.getEntry(action.payload)
    const entryFields = {
        title: entry.fields.title,
        purpose: entry.fields.purpose,
        responsibleIndividuals: entry.fields.responsibleIndividuals,
        relevantDocuments: entry.fields.relevantDocuments,
        handoffs: entry.fields.handoffs,
        completionDescription: entry.fields.completionDescription,
        measuresOfSuccess: entry.fields.measuresOfSuccess,
        faq: entry.fields.faq,
        team: entry.fields.team,
        type: entry.sys.contentType.sys.id
    }
    yield put({type: actionTypes.DISPLAY_ENTRY, payload: entryFields})
}

export function* getProcessEntriesSaga(action) {
    let contentType = ''
    console.log(typeof action.contentType)
    if (action.contentType.includes('1')) { contentType = 'process' }
    if (action.contentType.includes('2')) { contentType = 'walkthrough' }

    const searchObject = {
        'content_type': contentType,
        'fields.team': action.tabName
    }
    const entries = yield client.getEntries(searchObject)
    //parse what comes back into EntryCard consumable items
    const entryTitles = entries.items.map((entry) => {
        return {
            title: entry.fields.title,
            purpose: entry.fields.purpose,
            id: entry.sys.id,
            team: entry.fields.team,
            type: entry.sys.contentType.sys.id
        }
    })
    yield put({ type: actionTypes.DISPLAY_ENTRIES, payload: entryTitles })
}

export function* searchEntriesSaga(action) {
    const searchResults = yield client.getEntries({query: action.payload})
    //[ISSUE] possibly redundant, could use getProcessEntries saga
    const searchTitles = searchResults.items.map((entry) => {
        return {
            title: entry.fields.title,
            purpose: entry.fields.purpose,
            id: entry.sys.id,
            team: entry.fields.team
        }
    })
    yield put ({type: actionTypes.DISPLAY_SEARCH, payload: searchTitles})
}

//listen for actions and call sagas
export function* watchGetProcessEntrySaga() {
    yield takeEvery(actionTypes.GET_ENTRY, getProcessEntrySaga)
}

export function* watchGetProcessEntriesSaga() {
    yield takeEvery(actionTypes.GET_ENTRIES, getProcessEntriesSaga)
}

export function* watchSearchEntriesSaga() {
    yield takeEvery(actionTypes.SEARCH_ENTRIES, searchEntriesSaga)
}

export default function* rootSaga() {
    yield all([
        watchGetProcessEntriesSaga(),
        watchGetProcessEntrySaga(),
        watchSearchEntriesSaga()
    ])
}