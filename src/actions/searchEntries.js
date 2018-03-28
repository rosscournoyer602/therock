import { SEARCH_ENTRIES } from './actionTypes'

const searchEntries = (query) => {
    return {
        type: SEARCH_ENTRIES,
        payload: query
    }
}

export default searchEntries