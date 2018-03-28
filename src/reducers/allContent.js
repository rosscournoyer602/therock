import { UPDATE_ALL_CONTENT } from '../actions/actionTypes'

export default function allContent(state=[], action) {
    switch(action.type) {
        case UPDATE_ALL_CONTENT:
            return action.payload
        default:
            return state
    }   
}