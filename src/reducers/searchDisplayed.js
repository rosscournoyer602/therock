import { DISPLAY_SEARCH } from '../actions/actionTypes'

export default function searchDisplayed(state=[], action) {
    switch(action.type) {
        case DISPLAY_SEARCH:
            return action.payload
        default:
            return state
    }   
}