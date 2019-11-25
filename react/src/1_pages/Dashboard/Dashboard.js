import React, { Fragment } from 'react'
import './Dashboard.css'
import { Cards } from '../../3_elements/Cards/Cards'
import { Button } from 'reactstrap'


class Dashboard extends React.Component  {
	componentDidMount() {
		this.props.getAllHeroes()
	}

	render() {
		const style_box_sizing = {
			// boxSizing: "border-box"
		}
		return (
			<div id="page_dashboard">
				<h3>Top Heroes</h3>
				<Button color='info' onClick={this.props.deleteAllHeroes}>hide all</Button>
				<Button color='info' onClick={this.props.getAllHeroes}>show all</Button>
				{
					this.props.cards 
					&&	
					<Cards cards={this.props.cards.slice(0,4)} specific_style={style_box_sizing} />
				}
			</div>
		);
	}
}

export default Dashboard