//reducer to handle which team's list of entries is currently selected.

import { DISPLAY_ENTRIES, DISPLAY_SEARCH } from '../actions/actionTypes'

export default function entriesDisplayed(state=[], action) {
    switch(action.type) {
        case DISPLAY_ENTRIES:
            console.log('Reducer updated content: ' + JSON.stringify(action.payload))
            return action.payload
        case DISPLAY_SEARCH:
            console.log('Reducer updated content: ' + JSON.stringify(action.payload))
            return action.payload
        default:
            return state
    }   
}