
import React, { Fragment } from 'react'
import Header from './pages/Common/Header'
import NavBar from './pages/Common/NavBar'
import Footer from './pages/Common/Footer'
import { Route } from 'react-router-dom'
import ReduxApp from './pages/ReduxApp/ReduxApp'
import HomePage from './pages/HomePage/HomePage'
import './App.css'



const App = ({ component: Component, ...rest }) => (
	<Fragment>
		<Header />
		<NavBar />
		<div id="main">
	  		<switch>
			    <Route exact path="/" component={() => <div><h1 style={{color:"black"}}>Home</h1></div>} />
	  			<Route path="/reduxApp" component={ReduxApp} />
	  			<Route path="/MyApp" component={HomePage} />
			</switch>
		</div>
	  	<Footer />
  	</Fragment>
)

export default App