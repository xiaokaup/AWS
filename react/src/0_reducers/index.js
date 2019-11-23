import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import R_Heroes from './R_Heroes'

export default combineReducers({
	todos,
	visibilityFilter,
	heroes: R_Heroes
})