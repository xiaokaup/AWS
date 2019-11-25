import React, { Fragment } from 'react'
import FilterTodoView from '../../2_components/FilterTodo/FilterTodoView'
import AddTodoView from '../../2_components/AddTodo/AddTodoView'
import VisibleTodoListContainer from '../../2_components/VisibleTodoList/VisibleTodoListContainer'
import './ReduxApp.css'

const ReduxApp = () => (
	<Fragment>
		<FilterTodoView />
		<AddTodoView />
		<VisibleTodoListContainer />
	</Fragment>
)

export default ReduxApp