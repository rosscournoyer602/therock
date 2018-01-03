import { CREATE_UPLOAD } from './actionTypes'

const createUpload = (upload) => {
    console.log(upload)
    return {
        type: CREATE_UPLOAD,
        payload: upload
    }
}

export default createUpload