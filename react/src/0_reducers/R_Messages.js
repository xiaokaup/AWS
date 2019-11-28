const R_Messages = (state=[], action) => {
	switch(action.type) {
		case 'ADD_MESSAGE': 
			return [
				...state,
				action.text
			]
		default:
			return state
	}
}

export default R_Messages