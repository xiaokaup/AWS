import { getAllHeroes, addHero, updateHero, deleteHero } from './'

const pre_url = "http://young-stellar-base.com/"

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
  dispatch(fetchStart("getAllHero"))
  return fetch(pre_url + "nodejs/heroes", {cache: 'no-cache'})
    .then(response => response.json())
    .then(allHeroes => {
    	dispatch(fetchSuccess(allHeroes))
    	dispatch(getAllHeroes(allHeroes))
    })
    .catch(error => dispatch(fetchFailure(error)))
}

export const async_getByIdHero = (id) => (dispatch, getState) => {
  dispatch(fetchStart("getByIdHero: "+id))
  return fetch(pre_url + "nodejs/heroes/"+id)
    .then(response => response.json())
    .then(byIdHero => {
      dispatch(fetchSuccess(byIdHero))
      return byIdHero
    })
    .catch(error => dispatch(fetchFailure(error)))
}

export const aysnc_postHero = (name) => (dispatch, getState) => {
  dispatch(fetchStart("PostHero: "+ name))
  return fetch(pre_url + "nodejs/heroes", {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({name})
  })
  .then(response => response.json())
  .then(newHero => {
    dispatch(fetchSuccess(newHero))
    dispatch(addHero(newHero))
  })
  .catch(error => dispatch(fetchFailure(error)))
}

export const aysnc_updateHero = ({id, name}) => (dispatch, getState) => {
  dispatch(fetchStart("updateHero with id: "+id + "and name : " +name))
  return fetch(pre_url + "nodejs/heroes/"+id, {
    headers: {'content-type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify({id, name})
  })
  .then(response => response.json())
  .then(updatedHero => {
    console.log(updatedHero)
    dispatch(fetchSuccess(updatedHero))
    dispatch(updateHero(updatedHero))
  })
  .catch(error => dispatch(fetchFailure(error)))
}

export const aysnc_deleteHero = (id) => (dispatch, getState) => {
  dispatch(fetchStart("deleteHero id: "+id))
  return fetch(pre_url + "nodejs/heroes/"+id, {
    headers: {'content-type': 'application/json'},
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(deletedHero => {
    dispatch(fetchSuccess(deletedHero))
    dispatch(deleteHero(deletedHero))
  })
  .catch(error => dispatch(fetchFailure(error)))

}