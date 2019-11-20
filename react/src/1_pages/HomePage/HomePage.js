import React, { Fragment } from 'react'
import './HomePage.css'
import { Cards } from '../../3_elements/Cards'


class HomePage extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {cards: [{id:1, name:"a"}, {id:2, name:"b"}, {id:3, name:"c"}, {id:4, name:"d"}]}
	}

	// componentDidMount() {
	// 	fetch("http://35.180.32.33/nodejs/heroes")
	// 		.then(response => {
	// 			return response.json();
	// 		})
	// 		.then(heroes => {
	// 			console.log(heroes);
	// 		})
	// }

	render() {
		return (
			<Fragment>
				<div id="messages">
					{/*<app-messages></app-messages>*/}
				</div>
				<div id="content">
					{/*<router-outlet></router-outlet>*/}
					<h3>Top Heroes</h3>
					<div class="grid grid-pad">
						<Cards cards={this.state.cards} />
					</div>

					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default HomePage