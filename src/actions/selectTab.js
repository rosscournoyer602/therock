import { SELECT_TAB } from './actionTypes'

const selectTab = (tabName) => {
    return {
        type: SELECT_TAB,
        payload: tabName
    }
}

export default selectTab