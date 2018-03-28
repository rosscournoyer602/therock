import { CHECK_AUTH } from '../actions/actionTypes'

export default function authStatus(state=false, action) {
    switch(action.type) {
        case CHECK_AUTH:
            return action.payload
        default:
            return state
    }   
}