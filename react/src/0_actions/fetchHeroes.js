import { getAllHeroes } from './'

/* Async ============================================================================================ */
export const fetchStart = sourceName => ({
	type: "FETCH_START",
	sourceName
})

export const fetchSuccess = data => ({
	type: "FETCH_SUCCESS",
	data
})

export const fetchFailure = error => ({
	type: "FETCH_FAILURE",
	error
})

export const async_getAllHeroes = () => (dispatch, getState) => {
  dispatch(fetchStart("Hero"));
  return fetch("http://35.180.32.33/nodejs/heroes")
    .then(response => response.json())
    .then(json => {
    	dispatch(fetchSuccess(json))
    	dispatch(getAllHeroes(json))
    })
    .catch(error => dispatch(fetchFailure(error)))
}