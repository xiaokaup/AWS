let nextTodoId = 0

export const addTodo = text => ({
	type: "ADD_TODO",
	id: nextTodoId++,
	text
})

export const setVisibilityFilter = filter => ({
	type: "SET_VISIBILITY_FILTER",
	filter
})

export const toggleTodo = id => ({
	type: "TOGGLE_TODO",
	id
})

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}



/* Heroes =========================================================================================== */
export const getAllHeroes = () => ({
	type: 'GET_ALL_HEROES'
})

export const addHero = ({name}) => ({
	type: 'POST_HERO',
	name
})

export const getByIdHero = ({id}) => ({
	type: 'GET_BYID_HERO',
	id
})

export const updateHero = ({id, name}) => ({
	type: 'UPDATE_HERO',
	id,
	name
})

export const deleteHero = (id) => ({
	type: 'DELETE_HERO',
	id
})
