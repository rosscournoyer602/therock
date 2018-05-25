import { SIGNUP_USER } from './actionTypes'

const signupUser = (email, password) => {
    return {
        type: SIGNUP_USER,
        payload: { 
            email, 
            password
        }
    }
}

export default signupUser;