import { CREATE_UPLOAD } from './actionTypes'

const createUpload = (upload) => {
    console.log('Action created: ' + CREATE_UPLOAD + ' ' + upload.file.name)
    return {
        type: CREATE_UPLOAD,
        payload: upload
    }
}

export default createUpload