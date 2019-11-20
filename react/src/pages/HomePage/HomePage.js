import React, { Fragment } from 'react'
import FilterTodoView from '../../components/FilterTodo/FilterTodoView'
import AddTodoView from '../../components/AddTodo/AddTodoView'
import VisibleTodoListContainer from '../../components/VisibleTodoList/VisibleTodoListContainer'
import './HomePage.css'

const HomePage = () => (
	<Fragment>
		<div id="messages">
			{/*<app-messages></app-messages>*/}
		</div>
		<div id="content">
			{/*<router-outlet></router-outlet>*/}
			<h1>My app</h1>
		</div>
	</Fragment>
)

export default HomePage