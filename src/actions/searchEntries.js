import { SEARCH_ENTRIES } from './actionTypes'

const searchEntries = (query) => {
    console.log('Action created: ' + SEARCH_ENTRIES + ' ' + query)
    return {
        type: SEARCH_ENTRIES,
        payload: query
    }
}

export default searchEntries