import { combineReducers } from 'redux';
import tabSelected from './tabSelected';
import contentDisplayed from './contentDisplayed';
import entriesDisplayed from './entriesDisplayed';
import searchDisplayed from './searchDisplayed';
import uploadsQueued from './uploadsQueued';
import allContent from './allContent';
import authStatus from './authenticated';
import authErrors from './authErrors';
import tabs from './tabs';

const rootReducer = combineReducers({
    tabSelected,
    contentDisplayed,
    entriesDisplayed,
    searchDisplayed,
    uploadsQueued,
    allContent,
    tabs,
    authStatus,
    authErrors
});

export default rootReducer;