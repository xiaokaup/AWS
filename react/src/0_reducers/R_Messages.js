
const messages = JSON.parse(sessionStorage.getItem('messagesLog'))

const R_Messages = (state=messages ? messages : [], action) => {
	switch(action.type) {
		case 'ADD_MESSAGE': 
			sessionStorage.setItem('messagesLog', JSON.stringify([...state, action.text]))
			return [
				...state,
				action.text
			]
		case 'CLEAR_MESSAGES':
			sessionStorage.removeItem('messagesLog')
			return []
		default:
			return state
	}
}

export default R_Messages