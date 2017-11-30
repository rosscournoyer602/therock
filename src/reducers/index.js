import { combineReducers } from 'redux'
import tabSelected from './tabSelected'
import contentDisplayed from './contentDisplayed'
import entriesDisplayed from './entriesDisplayed'
import searchDisplayed from './searchDisplayed'
import tabs from './tabs'

const rootReducer = combineReducers({
    tabSelected,
    contentDisplayed,
    entriesDisplayed,
    searchDisplayed,
    tabs

})

export default rootReducer