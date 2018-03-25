import { GET_ENTRIES } from './actionTypes'

const getEntries = (tabName, key) => {
    console.log('this is key')
    console.log(key)
    return {
        type: GET_ENTRIES,
        tabName: tabName,
        contentType: key
    }
}

export default getEntries