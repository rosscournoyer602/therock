import { GET_ENTRIES } from './actionTypes'

const getEntries = (tabName) => {
    console.log('Action created: ' + GET_ENTRIES + ' ' + tabName)
    return {
        type: GET_ENTRIES,
        payload: tabName
    }
}

export default getEntries
//field id "team"
// GET spaces/{space_id}/entries?access_token={access_token}&content_type={content_type}&fields.{field_id}={value}