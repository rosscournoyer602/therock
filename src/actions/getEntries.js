import { SELECT_ENTRIES } from './actionTypes'

const getEntriesForTab = (tabName) => {
    console.log('Action created: ' + SELECT_ENTRIES + ' ' + tabName)
    return {
        type: SELECT_ENTRIES,
        tabName: tabName
    }
}

export default getEntriesForTab
//field id "team"
// GET spaces/{space_id}/entries?access_token={access_token}&content_type={content_type}&fields.{field_id}={value}