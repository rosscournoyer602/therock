import {put, takeEvery, all} from 'redux-saga/effects'
import { GET_ENTRIES } from './actions/actionTypes'
import { createClient } from 'contentful'
import creds from './creds.json'

const client = createClient({
    space: creds.spaceID,
    accessToken: creds.delieryToken
})

export function* helloSaga() {
    console.log('The Rock has Sagas installed')
}

export function* getEntriesSaga() {
    const entry = yield client.getEntry('17otKopTTcyoWAqMe22Qy6')
    yield console.log(entry)
}

export function* watchGetEntriesSaga() {
    yield takeEvery(GET_ENTRIES, getEntriesSaga)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchGetEntriesSaga()
    ])
}


//GET/spaces/{space_id}/entries?access_token={access_token}