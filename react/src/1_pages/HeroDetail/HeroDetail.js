import React, { Fragment } from 'react';
import './HeroDetail.css';


class HeroDetail extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {
			hero_id: 0,
			hero_name: '',
			hero_update_name: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
		this.goBack = this.goBack.bind(this);
	}

	componentDidMount() {
		this.props.getByIdHero(this.props.match.params.id)
			.then(byIdHero => this.setState({hero_name: byIdHero.name, hero_id: byIdHero.id}))
	}

	handleChange(event) {
		this.setState({hero_update_name: event.target.value});
	}

	goBack() {
		this.props.history.goBack();
	}

	save() {
		this.props.updateHero({id: this.state.hero_id, name: this.state.hero_update_name})
			.then(() => this.setState({hero_name: this.state.hero_update_name}));
	}

	render() {
		return (
			<Fragment>
				{
					this.state.hero_name
					&&
					<Fragment>
						<h2>{this.state.hero_name.toUpperCase()} Details</h2>
						<div><span>id: </span>{this.state.hero_id}</div>
						<div>
						  <label>name:
						    <input placeholder="name" value={this.state.hero_update_name} onChange={this.handleChange} />
						  </label>
						</div>
						<div>
							<button id='button_save' onClick={this.save}>save</button>
							<button id='button_goBack' onClick={this.goBack}>go back</button>
						</div>
					</Fragment>
				}
			</Fragment>
		);
	}
}

export default HeroDetail