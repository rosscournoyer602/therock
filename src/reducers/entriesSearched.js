import DISPLAY_SEARCH from '../actions/actionTypes'

export default function displaySearch(state=[], action) {
    switch(action.type) {
        case DISPLAY_SEARCH:
            return action.payload
        default:
            return state
    }   
}