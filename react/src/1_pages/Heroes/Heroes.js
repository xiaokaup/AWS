import React, { Fragment } from 'react'
import './Heroes.css'
import { Lists } from '../../3_elements/Lists'


class Heroes extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {lists: [], newHeroName: ""}

		this.handleChange = this.handleChange.bind(this);
		this.handleAddHero = this.handleAddHero.bind(this);
		this.handleDeleteHero = this.handleDeleteHero.bind(this);
	}

	componentDidMount() {
		fetch("http://35.180.32.33/nodejs/heroes")
			.then(response => {
				return response.json();
			})
			.then(heroes => {
				this.setState({lists: heroes});
			})
	}

	handleChange(event) {
		this.setState({newHeroName: event.target.value});
	}

	handleAddHero(event) {
		const postHero = (url, data) => {
		  // Default options are marked with *
		  return fetch(url, {
		    headers: {
		      // 'user-agent': 'Mozilla/4.0 MDN Example',
		      'content-type': 'application/json'
		    },
		    method: 'POST', // *GET, POST, PUT, DELETE, etc.
		    body: JSON.stringify(data), // must match 'Content-Type' header
		    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		    // credentials: 'same-origin', // include, same-origin, *omit
		    // mode: 'cors', // no-cors, cors, *same-origin
		    // redirect: 'follow', // manual, *follow, error
		    // referrer: 'no-referrer', // *client, no-referrer
		  })
		  .then(response => response.json()) // parses response to JSON
		}

		postHero("http://35.180.32.33/nodejs/heroes", {name: this.state.newHeroName})
			.then(data => {
				const heroes = this.state.lists;
				heroes.push(data);
				this.setState({lists: heroes});
			})
			.catch(error => console.log(error))
	}

	handleDeleteHero(event, id) {
		const deleteHero = (url) => {
		  // Default options are marked with *
		  return fetch(url, {
		    headers: {
		      // 'user-agent': 'Mozilla/4.0 MDN Example',
		      'content-type': 'application/json'
		    },
		    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
		    // body: JSON.stringify(data), // must match 'Content-Type' header
		    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		    // credentials: 'same-origin', // include, same-origin, *omit
		    // mode: 'cors', // no-cors, cors, *same-origin
		    // redirect: 'follow', // manual, *follow, error
		    // referrer: 'no-referrer', // *client, no-referrer
		  })
		  .then(response => response.json()) // parses response to JSON
		}

		deleteHero("http://35.180.32.33/nodejs/heroes/"+id)
			.then(data => {
				const heroes = this.state.lists;
				const heroes_filter = heroes.filter(x => {return x.id !== data.id})
				this.setState({lists: heroes_filter});
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
					<h2>My Heroes</h2>
					<div>
						<label>Hero name:
							<input type="text" value={this.state.newHeroName} onChange={this.handleChange} />
						</label>
						<button onClick={this.handleAddHero}>
							add
						</button>
					</div>
					
					<Lists ul_class="heroes" specific_style={null} lists={this.state.lists} handleDeleteHero={this.handleDeleteHero} />
				
					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default Heroes