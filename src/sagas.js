import {put, takeEvery, all} from 'redux-saga/effects'
import * as actionTypes from './actions/actionTypes'
import { createClient } from 'contentful'
import creds from './creds.json'

const client = createClient({
    space: creds.spaceID,
    accessToken: creds.deliveryToken
})

export function* getProcessEntrySaga(action) {
    const entry = yield client.getEntry(action.payload)
    yield put({type: actionTypes.DISPLAY_ENTRY, payload: entry})
}
export function* getProcessEntriesSaga(action) {
    const searchObject = {
        'content_type': 'process',
        'fields.team': action.payload
    }
    
    const entries = yield client.getEntries(searchObject)
    const entryTitles = entries.items.map((entry) => {
        return {
            title: entry.fields.title,
            purpose: entry.fields.purpose,
            id: entry.sys.id,
            team: entry.fields.team
        }
    })
    yield put({ type: actionTypes.DISPLAY_ENTRIES, payload: entryTitles })
    //start parsing what coems back into titles only
}

export function* watchGetProcessEntrySaga() {
    yield takeEvery(actionTypes.GET_ENTRY, getProcessEntrySaga)
}
export function* watchGetProcessEntriesSaga() {
    yield takeEvery(actionTypes.GET_ENTRIES, getProcessEntriesSaga)
}

export default function* rootSaga() {
    yield all([
        watchGetProcessEntriesSaga(),
        watchGetProcessEntrySaga()
    ])
}