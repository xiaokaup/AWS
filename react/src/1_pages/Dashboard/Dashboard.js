import React, { Fragment } from 'react'
import './Dashboard.css'
import { Cards } from '../../3_elements/Cards'


class Dashboard extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {cards: []}
	}

	componentDidMount() {
		fetch("http://35.180.32.33/nodejs/heroes")
			.then(response => {
				return response.json();
			})
			.then(heroes => {
				this.setState({cards: heroes.slice(0,4)});
			})
	}

	render() {
		return (
			<Fragment>
				<div id="messages">
					{/*<app-messages></app-messages>*/}
				</div>
				<div id="content">
					{/*<router-outlet></router-outlet>*/}
					<h3>Top Heroes</h3>

					{
					this.state.cards 
					&&	
					<div class="grid grid-pad">
						<Cards cards={this.state.cards} />
					</div>
					}

					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default Dashboard