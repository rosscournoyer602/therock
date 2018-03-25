import { GET_ENTRY } from './actionTypes'

const getEntry = (entryId, contentType) => {
    return {
        type: GET_ENTRY,
        id: entryId,
        contentType: contentType
    }
}

export default getEntry