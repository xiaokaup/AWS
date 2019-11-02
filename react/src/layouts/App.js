import React from 'react'
import FilterTodoView from '../components/FilterTodo/FilterTodoView'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
		<FilterTodoView />
		<AddTodo />
		<VisibleTodoList />
	</div>
)

export default App