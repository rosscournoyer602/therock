import { QUEUE_UPLOADS } from './actionTypes'

const queueUploads = (upload) => {
    return {
        type: QUEUE_UPLOADS,
        payload: upload
    }
}

export default queueUploads