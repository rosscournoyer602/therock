import { GET_ENTRY } from './actionTypes'

const getEntry = (entryId) => {
    console.log('Action created: ' + GET_ENTRY + ' ' + entryId)
    return {
        type: GET_ENTRY,
        payload: entryId
    }
}

export default getEntry