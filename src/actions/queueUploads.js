import { QUEUE_UPLOADS } from './actionTypes'

const queueUploads = (upload) => {
    console.log('Action created: ' + QUEUE_UPLOADS)
    return {
        type: QUEUE_UPLOADS,
        payload: upload
    }
}

export default queueUploads