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
		const id = this.props.match.params.id;
		fetch("http://35.180.32.33/nodejs/heroes/"+id)
			.then(response => {
				return response.json();
			})
			.then(hero => {
				this.setState({hero_name: hero.name, hero_id: hero.id});
			})
	}

	handleChange(event) {
		this.setState({hero_update_name: event.target.value});
	}

	goBack() {
		this.props.history.goBack();
	}

	save() {
		const putHero = (url, data) => {
		  // Default options are marked with *
		  return fetch(url, {
		    headers: {
		      // 'user-agent': 'Mozilla/4.0 MDN Example',
		      'content-type': 'application/json'
		    },
		    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
		    body: JSON.stringify(data), // must match 'Content-Type' header
		    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		    // credentials: 'same-origin', // include, same-origin, *omit
		    // mode: 'cors', // no-cors, cors, *same-origin
		    // redirect: 'follow', // manual, *follow, error
		    // referrer: 'no-referrer', // *client, no-referrer
		  })
		  .then(response => response.json()) // parses response to JSON
		}

		const id = this.state.hero_id;
		putHero("http://35.180.32.33/nodejs/heroes/"+id, {name: this.state.hero_update_name, id: id})
			.then(hero_update => {
				this.setState({hero_name: hero_update.name})
			})
			.catch(error => console.log(error))
	}

	render() {
		return (
			<Fragment>
				<div id="messages">
					{/*<app-messages></app-messages>*/}
				</div>
				<div id="content">
				{
					this.state.hero_id && this.state.hero_name
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
				</div>
			</Fragment>
		);
	}
}

export default HeroDetail