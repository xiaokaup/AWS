import React from 'react'
// import Header from './pages/Common/Header'
// import NavBar from './pages/Common/NavBar'
// import Footer from './pages/Common/Footer'
import { Route } from 'react-router-dom'
import './App.css'

const AppSinglePageRoute = ({ component: Component, ...rest }) => (
<Route
  {...rest}
  render={routeProps => (
  	<div>
		<Component {...routeProps} />		
	</div>
  )}
/>
)

export default AppSinglePageRoute