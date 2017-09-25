import {put, takeEvery, all} from 'redux-saga/effects'
import * as actionTypes from './actions/actionTypes'
import { createClient } from 'contentful'
import creds from './creds.json'

const client = createClient({
    space: creds.spaceID,
    accessToken: creds.delieryToken
})

export function* helloSaga() {
    console.log('The Rock has Sagas installed')
}

export function* getEntriesSaga(action) {
    const searchObject = {
        'content_type': 'process',
        'fields.team': action.payload
    }

    const entry = yield client.getEntries(searchObject)
    yield put({ type: actionTypes.DISPLAY_CONTENT, payload: entry })
    //start parsing what coems back into titles only
}

export function* watchGetEntriesSaga() {
    yield takeEvery(actionTypes.SELECT_TAB, getEntriesSaga)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchGetEntriesSaga()
    ])
}


//GET/spaces/{space_id}/entries?access_token={access_token}