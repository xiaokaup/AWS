import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import R_Heroes from './R_Heroes'
import R_Messages from './R_Messages'


export const enableBatching = reducer => {
  return function batchingReducer(state, action) {
    switch (action.type) {
    case 'BATCH_ACTIONS':
      return action.actions.reduce(batchingReducer, state);
    default:
      return reducer(state, action);
    }
  }
}

export default combineReducers({
	todos,
	visibilityFilter,
	heroes: R_Heroes,
	messages: R_Messages
})