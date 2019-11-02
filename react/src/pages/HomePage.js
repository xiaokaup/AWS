import React from 'react'
import FilterTodoView from '../components/FilterTodo/FilterTodoView'
import AddTodoView from '../components/AddTodo/AddTodoView'
import VisibleTodoListContainer from '../components/VisibleTodoList/VisibleTodoListContainer'

const HomePage = () => (
	<div id="main">
		{/*<div id="messages">
			<app-messages></app-messages>
		</div>
		<div id="content">
			<router-outlet></router-outlet>
		</div>*/}
		<FilterTodoView />
		<AddTodoView />
		<VisibleTodoListContainer />
	</div>
)

export default HomePage