import { UNAUTH_USER } from './actionTypes';

export default function unauthUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}