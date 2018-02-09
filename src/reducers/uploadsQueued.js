import { QUEUE_UPLOADS, CLEAR_UPLOADS } from '../actions/actionTypes'

export default function queueUploads(state=[], action) {
    switch(action.type) {
        case QUEUE_UPLOADS:
            console.log('Reducer queued upload: ' + JSON.stringify(action.payload))
            return [...state, action.payload]
        case CLEAR_UPLOADS:
            console.log('Reducer queued upload')
            return []
        default:
            return state
    }   
}