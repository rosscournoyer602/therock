import { combineReducers } from 'redux'
import tabSelected from './tabSelected'
import tabs from './tabs'

const rootReducer = combineReducers({
    tabSelected,
    tabs
})

export default rootReducer