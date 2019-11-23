import React, { Fragment } from 'react'
import './Dashboard.css'
import { Cards } from '../../3_elements/Cards'


class Dashboard extends React.Component  {
	// componentDidMount() {
		// fetch("http://35.180.32.33/nodejs/heroes")
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(heroes => {
		// 		console.log(heroes)
		// 		this.setState({cards: heroes.slice(0,4)});
		// 	})
	// }

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
					<h3>Top Heroes</h3>
					<button onClick={this.props.deleteAllHeroes}>hide all</button>
					<button onClick={this.props.getAllHeroes}>show all</button>
					{
					this.props.cards 
					&&	
					<div className="grid grid-pad">
						<Cards cards={this.props.cards.slice(0,4)} specific_style={style_border_box} />
					</div>
					}
				</div>
			</Fragment>
		);
	}
}

export default Dashboard