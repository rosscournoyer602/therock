import { combineReducers } from 'redux'
import tabSelected from './tabSelected'
import contentDisplayed from './contentDisplayed'
import entriesDisplayed from './entriesDisplayed'
import searchDisplayed from './searchDisplayed'
import uploadsQueued from './uploadsQueued'
import allContent from './allContent'
import tabs from './tabs'

const rootReducer = combineReducers({
    tabSelected,
    contentDisplayed,
    entriesDisplayed,
    searchDisplayed,
    uploadsQueued,
    allContent,
    tabs
})

export default rootReducer