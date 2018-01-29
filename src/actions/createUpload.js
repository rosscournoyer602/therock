import { CREATE_UPLOAD } from './actionTypes'

const createUpload = (event) => {
    console.log(event)
    console.log('Action created: ' + CREATE_UPLOAD)
    return {
        type: CREATE_UPLOAD,
        payload: event
    }
}

export default createUpload