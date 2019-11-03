import React from 'react'
import Header from './pages/Common/Header'
import NavBar from './pages/Common/NavBar'
import Footer from './pages/Common/Footer'
import { Route } from 'react-router-dom'
import './App.css'

const AppSinglePageRoute = ({ component: Component, ...rest }) => (
<Route
  {...rest}
  render={routeProps => (
  	<div>
		<Header />

		<NavBar />

		<Component {...routeProps} />

		<Footer />
	</div>
  )}
/>
)

export default AppSinglePageRoute