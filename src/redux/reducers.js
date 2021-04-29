
import * as actionTypes from './actionTypes'
const initState = {
    addData: []
}
export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.addData: {
            return {
                ...state,
                addData: state.addData.concat(action.payload)
            }
        }
        default:
            return state
    }

}