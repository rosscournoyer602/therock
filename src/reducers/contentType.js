import { GET_ENTRIES, GET_ENTRY } from'../actions/actionTypes'

export default function contentType(state=[], action) {
    switch(action.type) {
        case GET_ENTRIES:
            console.log('Reducer updated content type: ' + action.type)
            return action.type
        case GET_ENTRY:
            console.log('Reducer updated content type: ' + action.type)
            return action.type
        default:
            return state
    }   
}