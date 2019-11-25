import React, { Fragment } from 'react'
import './Heroes.css'
import { Lists } from '../../3_elements/Lists'
import { isArrayEqual } from '../../4_scripts'


class Heroes extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {newHeroName: ""}

		this.handleChange = this.handleChange.bind(this);
		this.handleAddHero = this.handleAddHero.bind(this);
		this.handleDeleteHero = this.handleDeleteHero.bind(this);
	}

	componentDidMount() {
		this.props.getAllHeroes();
	}

	componentDidUpdate() {
		this.props.getAllHeroes();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(!isArrayEqual(this.props.lists, nextProps.lists) || this.state.newHeroName!==nextState.newHeroName) return true;
		else return false;
	}

	handleChange(event) {
		this.setState({newHeroName: event.target.value});
	}

	handleAddHero(event) {
		this.props.addHero(this.state.newHeroName)
	}

	handleDeleteHero(event, id) {
		this.props.deleteHero(id)
	}

	render() {
		return (
			<Fragment>
				<div id="messages">
					{/*<app-messages></app-messages>*/}
				</div>
				<div id="content">
					<h2>My Heroes</h2>
					<div>
						<label>Hero name:
							<input type="text" value={this.state.newHeroName} onChange={this.handleChange} />
						</label>
						<button onClick={this.handleAddHero}>
							add
						</button>
					</div>
					
					<Lists ul_class="heroes" specific_style={null} lists={this.props.lists} handleDeleteHero={this.handleDeleteHero} />
				
					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default Heroes