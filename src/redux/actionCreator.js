import * as actionTypes from './actionTypes'

export const setAddData = (data) => {
    return {
        type: actionTypes.addData,
        payload: data
    }
}