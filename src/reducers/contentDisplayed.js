import { DISPLAY_CONTENT } from '../actions/actionTypes'

export default function contentDisplayed(state='Your content will be displayed here', action) {
    switch(action.type) {
        case DISPLAY_CONTENT:
            console.log('Reducer updated content: ' + JSON.stringify(action.payload))
            return action.payload
        default:
            return state
    }   
}