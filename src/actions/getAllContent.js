import { GET_ALL_CONTENT } from './actionTypes'

const getAllContent = (teams) => {
    return {
        type: GET_ALL_CONTENT,
        payload: teams
    }
}

export default getAllContent