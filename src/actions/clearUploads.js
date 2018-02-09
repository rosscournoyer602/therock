import { CLEAR_UPLOADS } from './actionTypes'

const clearUploads = () => {
    console.log('Action created: ' + CLEAR_UPLOADS)
    return {
        type: CLEAR_UPLOADS
    }
}

export default clearUploads