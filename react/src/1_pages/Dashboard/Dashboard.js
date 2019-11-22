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
		const style_border_box = {
			boxSizing: "border-box"
		}
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
					<div className="grid grid-pad">
						<Cards cards={this.state.cards} specific_style={style_border_box} />
					</div>
					}

					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default Dashboard