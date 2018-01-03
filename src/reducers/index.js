import { combineReducers } from 'redux'
import tabSelected from './tabSelected'
import contentDisplayed from './contentDisplayed'
import entriesDisplayed from './entriesDisplayed'
import searchDisplayed from './searchDisplayed'
import assetsReady from './assetsReady'
import tabs from './tabs'

const rootReducer = combineReducers({
    tabSelected,
    contentDisplayed,
    entriesDisplayed,
    searchDisplayed,
    assetsReady,
    tabs

})

export default rootReducer