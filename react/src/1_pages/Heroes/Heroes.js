import React, { Fragment } from 'react'
import './Heroes.css'
import { Lists } from '../../3_elements/List/List'
import { isArrayEqual } from '../../4_scripts'
import { Button } from 'reactstrap'


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
		if(!isArrayEqual(this.props.listHeroes, nextProps.listHeroes) || this.state.newHeroName!==nextState.newHeroName) return true;
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
			<div id='page_heroes'>
				<h2>My Heroes</h2>
				<div>
					<label>Hero name:{' '}
						<input type="text" value={this.state.newHeroName} onChange={this.handleChange} />
					</label>
					<Button color='primary' onClick={this.handleAddHero}>
						add
					</Button>
				</div>
				
				<Lists ul_class="badgeList" specific_style={null} list={this.props.listHeroes} handleDeleteHero={this.handleDeleteHero} />
			
				{/*<app-hero-search></app-hero-search>*/}
			</div>
		);
	}
}

export default Heroes