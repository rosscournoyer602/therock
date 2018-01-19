import { CREATE_ENTRY } from './actionTypes'

const createEntry = (entry) => {
    return {
        type: CREATE_ENTRY,
        payload: entry
    }
}

export default createEntry