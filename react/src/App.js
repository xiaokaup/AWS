import React from 'react'
import FilterTodoView from './components/FilterTodo/FilterTodoView'
import AddTodoView from './components/AddTodo/AddTodoView'
import VisibleTodoListContainer from './components/VisibleTodoList/VisibleTodoListContainer'

const App = () => (
	<div>
		<FilterTodoView />
		<AddTodoView />
		<VisibleTodoListContainer />
	</div>
)

export default App