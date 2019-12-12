import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './2_components/Common/Header'
import NavBar from './2_components/Common/NavBar'
import Footer from './2_components/Common/Footer'
import ReduxApp from './1_pages/ReduxApp/ReduxApp'
import DashboardContainer from './1_pages/Dashboard/DashboardContainer'
import HeroesContainer from './1_pages/Heroes/HeroesContainer'
import HeroDetailContainer from './1_pages/HeroDetail/HeroDetailContainer'
import MessagesLogContainer from './2_components/MessagesLog/MessagesLogContainer'

const App = ({ component: Component, ...rest }) => (
	<Fragment>
		<Container>

			<NavBar />
			{/*<Header />*/}
			<div id="main">
				<MessagesLogContainer />
				<div id="content">
			  		<Switch>
					    <Route exact path="/" component={Header} />
			  			<Route path="/reduxApp" component={ReduxApp} />
			  			<Route path="/Dashboard" component={DashboardContainer} />
			  			<Route path="/heroes" component={HeroesContainer} />
			  			<Route path="/detail/:id" component={HeroDetailContainer} />
					</Switch>
				</div>
			</div>
	  	<Footer />

  	</Container>
	</Fragment>
)

export default App
