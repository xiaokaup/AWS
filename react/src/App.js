
import React, { Fragment } from 'react'
import Header from './pages/Common/Header'
import NavBar from './pages/Common/NavBar'
import Footer from './pages/Common/Footer'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import './App.css'



const App = ({ component: Component, ...rest }) => (
	<Fragment>
		<Header />
		<NavBar />
	  		<switch>
			    <Route exact path="/" component={() => <div><h1 style={{color:"black"}}>Home</h1></div>} />
	  			<Route path="/app" component={HomePage} />
			</switch>
	  	<Footer />
  	</Fragment>
)

export default App