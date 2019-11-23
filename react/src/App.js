
import React, { Fragment } from 'react'
import Header from './1_pages/Common/Header'
import NavBar from './1_pages/Common/NavBar'
import Footer from './1_pages/Common/Footer'
import { Route } from 'react-router-dom'
import ReduxApp from './1_pages/ReduxApp/ReduxApp'
import DashboardContainer from './1_pages/Dashboard/DashboardContainer'
import HeroesContainer from './1_pages/Heroes/HeroesContainer'
import HeroDetail from './1_pages/HeroDetail/HeroDetail'
import './App.css'



const App = ({ component: Component, ...rest }) => (
	<Fragment>
		<Header />
		<NavBar />
		<div id="main">
	  		<switch>
			    <Route exact path="/" component={() => <div><h1 style={{color:"black"}}>Home</h1></div>} />
	  			<Route path="/reduxApp" component={ReduxApp} />
	  			<Route path="/Dashboard" component={DashboardContainer} />
	  			<Route path="/heroes" component={HeroesContainer} />
	  			<Route path="/detail/:id" component={HeroDetail} />
			</switch>
		</div>
	  	<Footer />
  	</Fragment>
)

export default App