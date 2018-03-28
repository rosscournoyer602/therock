import { SELECT_TAB } from '../actions/actionTypes'

export default function tabSelected(state=[], action) {
    switch(action.type) {
        case SELECT_TAB:
            return action.payload
        default:
            return state
    }   
}