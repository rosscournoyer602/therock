//reducer to handle which team's list of entries is currently selected.

import { DISPLAY_ENTRIES, DISPLAY_ENTRY, CLEAR_DISPLAY } from '../actions/actionTypes'

export default function entriesDisplayed(state=[], action) {
    switch(action.type) {
        case DISPLAY_ENTRIES:
            console.log('Reducer updated content: ' + JSON.stringify(action.payload))
            return action.payload
        case CLEAR_DISPLAY:
            console.log('Reducer has cleared the currently displayed content.')
            return []
        default:
            return state
    }   
}