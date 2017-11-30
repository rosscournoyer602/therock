import { DISPLAY_ENTRY, CLEAR_DISPLAY } from '../actions/actionTypes'

export default function contentDisplayed(state=[], action) {
    switch(action.type) {
        case DISPLAY_ENTRY:
            console.log('Reducer updated content: ' + JSON.stringify(action.payload))
            return action.payload
        case CLEAR_DISPLAY:
            console.log('Reducer has cleared the currently displayed content.')
            return []
        default:
            return state
    }   
}