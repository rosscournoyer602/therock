import { DELETE_ENTRY } from './actionTypes'

const deleteEntry = (entryID) => {
    return {
        type: DELETE_ENTRY,
        payload: entryID
    }
}

export default deleteEntry