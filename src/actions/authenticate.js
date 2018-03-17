import { TRY_LOGIN } from './actionTypes'

const tryLogin = (password) => {
    console.log('Action created: ' + TRY_LOGIN)
    return {
        type: TRY_LOGIN,
        payload: password
    }
}

export default tryLogin