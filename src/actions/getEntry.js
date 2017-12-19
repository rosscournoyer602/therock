import { GET_ENTRY } from './actionTypes'

const getEntry = (entryId, contentType) => {
    console.log('Action created: ' + GET_ENTRY + ' ' + entryId)
    return {
        type: GET_ENTRY,
        id: entryId,
        contentType: contentType
    }
}

export default getEntry