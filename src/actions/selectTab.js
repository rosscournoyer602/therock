import { SELECT_TAB } from './actionTypes'

const selectTab = (tabName) => {
    console.log('Action created: ' + SELECT_TAB + ' ' + tabName)
    return {
        type: SELECT_TAB,
        payload: tabName
    }
}

export default selectTab