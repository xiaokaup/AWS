import React, { Fragment } from 'react'
import FilterTodoView from '../../2_components/FilterTodo/FilterTodoView'
import AddTodoView from '../../2_components/AddTodo/AddTodoView'
import VisibleTodoListContainer from '../../2_components/VisibleTodoList/VisibleTodoListContainer'
import './ReduxApp.css'

const ReduxApp = () => (
	<Fragment>
		<div id="messages">
			{/*<app-messages></app-messages>*/}
		</div>
		<div id="content">
			{/*<router-outlet></router-outlet>*/}
			<FilterTodoView />
			<AddTodoView />
			<VisibleTodoListContainer />
		</div>
	</Fragment>
)

export default ReduxApp