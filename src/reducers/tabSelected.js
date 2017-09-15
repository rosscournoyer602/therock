import { SELECT_TAB } from '../actions/actionTypes'

export default function tabSelected(state=null, action) {
    switch(action.type) {
        case SELECT_TAB:
            console.log('Reducer changed selected tab: ' + action.payload)
            return action.payload
        default:
            console.log('Selected tab is: ' + state)
            return state
    }   
}