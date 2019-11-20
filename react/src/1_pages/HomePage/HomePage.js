import React, { Fragment } from 'react'
import './HomePage.css'
import { Cards } from '../../3_elements/Cards'


const HomePage = () => (
	<Fragment>
		<div id="messages">
			{/*<app-messages></app-messages>*/}
		</div>
		<div id="content">
			{/*<router-outlet></router-outlet>*/}
			<h3>Top Heroes</h3>
			<div class="grid grid-pad">
				<Cards cards={[{id:1, name:"a"}, {id:2, name:"b"}, {id:3, name:"c"}, {id:4, name:"d"}]} />
			</div>

			{/*<app-hero-search></app-hero-search>*/}
		</div>
	</Fragment>
)

export default HomePage