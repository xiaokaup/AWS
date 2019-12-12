import React, { Fragment } from 'react'
import FilterTodoView from '../../2_components/FilterTodo/FilterTodoView'
import AddTodoView from '../../2_components/AddTodo/AddTodoView'
import VisibleTodoListContainer from '../../2_components/VisibleTodoList/VisibleTodoListContainer'
import { Row, Col } from 'reactstrap'
import './ReduxApp.css'

const ReduxApp = () => (
	<Fragment>
		<div id="ReduxApp">
			<Row><Col><FilterTodoView /></Col></Row>
			<Row><Col><AddTodoView /></Col></Row>
			<Row><Col><VisibleTodoListContainer /></Col></Row>
		</div>
	</Fragment>
)

export default ReduxApp