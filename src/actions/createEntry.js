import { CREATE_ENTRY } from './actionTypes'

const createEntry = (entry) => {
    console.log(entry)
    return {
        type: CREATE_ENTRY,
        payload: entry
    }
}

export default createEntry