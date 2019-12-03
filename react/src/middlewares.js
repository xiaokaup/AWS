import { addMessage, batchActions } from './0_actions'

//next为原dispatch方法
//action为传入派发器的action对象
export const saveActionMessages = store => next => action => {
	next(batchActions(
		addMessage(action.type),
		action
	))
}
