const R_Heroes = (state=[], action) => {
	switch(action.type) {
		case 'ADD_HERO':
			return [
				...state,
				{
					name: action.name
				}
			]
		default:
			return state
	}
}