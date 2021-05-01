import * as actionTypes from './actionTypes'

export const setAddData = (data) => dispatch => {
    fetch("https://formtableshow.firebaseio.com/places.json",
        {
            method: "POST",
            body: JSON.stringify(data)
        }
    ).catch(error => console.log(error))
        .then(res => res.json())
        .then(data => console.log(data))
    return {
        type: actionTypes.addData,
        payload: data
    }
}

export const setPlaces = places => {
    return {
        type: actionTypes.setPlaces,
        payload: places
    }
}
export const loadPlaces = () => dispatch => {
    fetch("https://formtableshow.firebaseio.com/places.json")
        .catch(err => {
            alert("something went wrong, sorry")
            console.log(err);
        })
        .then(res => res.json())
        .then(data => {
            const places = []
            for (let key in data) {
                places.push({
                    ...data[key],
                    key: key
                })
            }
            dispatch(setPlaces(places))
        })
}
export const deletePlaceData = key => {
    return {
        type: actionTypes.deletePlace,
        payload: key
    }
}