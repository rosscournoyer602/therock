import { CLEAR_ENTRIES } from './actionTypes'

const clearEntries = () => {
    console.log('Action created: ' + CLEAR_ENTRIES)
    return {
        type: CLEAR_ENTRIES
    }
}

export default clearEntries