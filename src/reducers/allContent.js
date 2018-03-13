import { UPDATE_ALL_CONTENT } from '../actions/actionTypes'

export default function allContent(state=[], action) {
    switch(action.type) {
        case UPDATE_ALL_CONTENT:
            console.log('Reducer updated "all content": ' + JSON.stringify(action.payload))
            return action.payload
        default:
            return state
    }   
}