import { QUEUE_UPLOADS, CLEAR_UPLOADS } from '../actions/actionTypes'

export default function queueUploads(state=[], action) {
    switch(action.type) {
        case QUEUE_UPLOADS:
            return [...state, action.payload]
        case CLEAR_UPLOADS:
            return []
        default:
            return state
    }   
}