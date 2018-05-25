import { AUTH_ERROR, CLEAR_ERROR } from '../actions/actionTypes';

export default function authErrors(state=null, action) {
    switch(action.type) {
        case AUTH_ERROR:
            return action.payload;
        case CLEAR_ERROR:
            return null;
        default:
            return state;
    }   
}