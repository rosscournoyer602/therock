import { GET_ENTRIES } from './actionTypes'

const getEntries = (tabName, key) => {

    return {
        type: GET_ENTRIES,
        tabName: tabName,
        contentType: key
    }
}

export default getEntries