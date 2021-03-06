
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
        case actionTypes.deletePlace: {
            return {
                ...state,
                addData: state.addData.filter(place => place.key !== action.payload)
            }
        }
        case actionTypes.setPlaces: {
            return {
                ...state,
                addData: action.payload
            }
        }
        default:
            return state
    }

}