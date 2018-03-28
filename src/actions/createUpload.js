import { CREATE_UPLOAD } from './actionTypes'

const createUpload = (event) => {
    return {
        type: CREATE_UPLOAD,
        payload: event
    }
}

export default createUpload