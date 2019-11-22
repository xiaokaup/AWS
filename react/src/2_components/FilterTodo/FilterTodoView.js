import React from 'react'
import FilterTodoContainer from './FilterTodoContainer'
import { VisibilityFilters } from '../../0_actions'

const FilterTodoView = () => (
	<div id='footer'>
		<span>Show: </span>
		<FilterTodoContainer filter={VisibilityFilters.SHOW_ALL}>All</FilterTodoContainer>
		<FilterTodoContainer filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterTodoContainer>
		<FilterTodoContainer filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterTodoContainer>
	</div>
)

export default FilterTodoView