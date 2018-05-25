import { TRY_AUTH } from './actionTypes'

const tryAuth = (email, password) => {
    return {
        type: TRY_AUTH,
        payload: { 
            email, 
            password
        }
    }
}

export default tryAuth;