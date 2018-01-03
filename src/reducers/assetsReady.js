import { READY_ASSETS } from '../actions/actionTypes'

export default function contentDisplayed(state=[], action) {
    switch(action.type) {
        case READY_ASSETS:
            console.log('Reducer updated assets: ' + JSON.stringify(action.asset))
            return [...state, action.payload]
        default:
            return state
    }   
}