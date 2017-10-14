import { GET_ENTRIES } from './actionTypes'

const getEntries = (tabName) => {
    console.log('Action created: ' + GET_ENTRIES + ' ' + tabName)
    return {
        type: GET_ENTRIES,
        payload: tabName
    }
}

export default getEntries