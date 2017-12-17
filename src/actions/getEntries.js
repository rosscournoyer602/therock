import { GET_ENTRIES } from './actionTypes'

const getEntries = (tabName, key) => {
    console.log('Action created: ' + GET_ENTRIES + ' ' + tabName)
    return {
        type: GET_ENTRIES,
        tabName: tabName,
        contentType: key.key
    }
}

export default getEntries