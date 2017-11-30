import { DISPLAY_SEARCH } from '../actions/actionTypes'

export default function searchDisplayed(state=[], action) {
    switch(action.type) {
        case DISPLAY_SEARCH:
            console.log('Reducer updated searchDisplayed with ' + action.payload.items.length + ' items.')
            return action.payload
        default:
            return state
    }   
}