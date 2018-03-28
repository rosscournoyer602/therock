import { DISPLAY_ENTRY, CLEAR_DISPLAY } from '../actions/actionTypes'

export default function contentDisplayed(state={}, action) {
    switch(action.type) {
        case DISPLAY_ENTRY:
            return action.payload
        case CLEAR_DISPLAY:
            return []
        default:
            return state
    }   
}