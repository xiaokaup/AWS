import React from 'react'
import './NavBar.css'

const NavBar = () => (
	<nav>
		<a routerLink="/dashboard">Dashboard</a>
		<a routerLink="/heroes">Heroes</a>
	</nav>
)

export default NavBar