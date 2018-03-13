import { GET_ALL_CONTENT } from './actionTypes'

const getAllContent = () => {
    console.log('Action created: ' + GET_ALL_CONTENT)
    return {
        type: GET_ALL_CONTENT
    }
}

export default getAllContent