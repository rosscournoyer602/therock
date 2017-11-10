import { CLEAR_DISPLAY } from './actionTypes'

const clearDisplay = () => {
    console.log('Action created: ' + CLEAR_DISPLAY)
    return {
        type: CLEAR_DISPLAY
    }
}

export default clearDisplay