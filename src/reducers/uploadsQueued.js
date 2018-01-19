import { QUEUE_UPLOADS } from '../actions/actionTypes'

export default function queueUploads(state=[], action) {
    switch(action.type) {
        case QUEUE_UPLOADS:
            console.log('Reducer queued upload: ' + JSON.stringify(action.payload))
            return [...state, action.payload]
        default:
            return state
    }   
}