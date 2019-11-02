import React from 'react'
import Header from './pages/Common/Header'
import Footer from './pages/Common/Footer'
import HomePage from './pages/HomePage'


const App = () => (
	<div>
		<Header />

		{/*<nav>
			<a routerLink="/dashboard">Dashboard</a>
			<a routerLink="/heroes">Heroes</a>
		</nav>	*/}
		
		<HomePage />

		<Footer />
	</div>
)

export default App