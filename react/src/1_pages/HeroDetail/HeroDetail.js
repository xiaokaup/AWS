import React, { Fragment } from 'react';
import './HeroDetail.css';


class HeroDetail extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {hero: {id: 1, name: 'jiean'}}

		this.handleChange = this.handleChange.bind(this);
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch("http://35.180.32.33/nodejs/heroes/"+id)
			.then(response => {
				return response.json();
			})
			.then(hero => {
				this.setState({hero: hero});
			})
	}

	handleChange(event) {
		this.setState({hero: {name: event.target.value}});
	}

	goBack() {
		this.props.history.goBack();
	}

	render() {
		return (
			<Fragment>
				<div id="messages">
					{/*<app-messages></app-messages>*/}
				</div>
				<div id="content">
				{
					this.state.hero
					&&
					<Fragment>
						<h2>{this.state.hero.name.toUpperCase()} Details</h2>
						<div><span>id: </span>{this.state.hero.id}</div>
						<div>
						  <label>name:
						    <input placeholder="name" onChange={this.handleChange} />
						  </label>
						</div>
						<div>
							<button id='button_save' onClick='save()'>save</button>
							<button id='button_goBack' onClick={this.goBack}>go back</button>
						</div>
					</Fragment>
				}
				</div>
			</Fragment>
		);
	}
}

export default HeroDetail