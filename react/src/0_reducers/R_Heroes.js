const mock_data = [
	{id: 1, name: "Jiean Yang"},
	{id: 2, name: "Dr Nice"},
	{id: 3, name: "Narco"},
	{id: 4, name: "Bombasto"},
	{id: 5, name: "Celeritas"},
	{id: 6, name: "Magneta"},
	{id: 7, name: "RubberMan"},
	{id: 8, name: "Dynama"},
	{id: 9, name: "DR IQ"},
	{id: 10, name: "Magma"}
]

const R_Heroes = (state=[...mock_data], action) => {
	switch(action.type) {
		case 'GET_ALL_HEROES': {
			return mock_data
		}
		case 'POST_HERO':
			return [
				...state,
				{
					name: action.name
				}
			]
		case 'GET_BYID_HERO':
			return state.filter(hero => hero.id===action.id)
		case 'UPDATE_HERO': {
			return state.map(hero => 
				hero.id===action.id ? {...hero, name: action.name} : hero
			)
		}
		case 'DELETE_HERO':
			return state.filter(hero => hero.id!==action.id)
		case 'DELETE_ALL_HERO':
			return []
		default:
			return state
	}
}

export default R_Heroes