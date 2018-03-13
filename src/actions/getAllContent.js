import { GET_ALL_CONTENT } from './actionTypes'

const getAllContent = (teams) => {
    console.log('Action created: ' + GET_ALL_CONTENT)
    return {
        type: GET_ALL_CONTENT,
        payload: teams
    }
}

export default getAllContent