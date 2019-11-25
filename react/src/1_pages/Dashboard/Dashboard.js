import React, { Fragment } from 'react'
import './Dashboard.css'
import { Cards } from '../../3_elements/Cards'


class Dashboard extends React.Component  {
	componentDidMount() {
		this.props.getAllHeroes()
	}

	render() {
		const style_box_sizing = {
			boxSizing: "border-box"
		}
		return (
			<Fragment>
				<h3>Top Heroes</h3>
				<button onClick={this.props.deleteAllHeroes}>hide all</button>
				<button onClick={this.props.getAllHeroes}>show all</button>
				{
				this.props.cards 
				&&	
				<div className="grid grid-pad">
					<Cards cards={this.props.cards.slice(0,4)} specific_style={style_box_sizing} />
				</div>
				}
			</Fragment>
		);
	}
}

export default Dashboard