import { TRY_LOGIN } from './actionTypes'

const tryLogin = (password) => {
    return {
        type: TRY_LOGIN,
        payload: password
    }
}

export default tryLogin