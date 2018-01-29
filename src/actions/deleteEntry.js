import { DELETE_ENTRY } from './actionTypes'

const deleteEntry = (entryID) => {
    console.log('Action created: ' + DELETE_ENTRY)
    return {
        type: DELETE_ENTRY,
        payload: entryID
    }
}

export default deleteEntry