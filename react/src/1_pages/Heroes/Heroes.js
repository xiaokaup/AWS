import React, { Fragment } from 'react'
import './Heroes.css'
import { Lists } from '../../3_elements/Lists'


class Heroes extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {newHeroName: ""}

		this.handleChange = this.handleChange.bind(this);
		this.handleAddHero = this.handleAddHero.bind(this);
		this.handleDeleteHero = this.handleDeleteHero.bind(this);
	}

	// componentDidMount() {
		// fetch("http://35.180.32.33/nodejs/heroes")
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(heroes => {
		// 		this.setState({lists: heroes});
		// 	})
	// }

	handleChange(event) {
		this.setState({newHeroName: event.target.value});
	}

	handleAddHero(event) {
		const postHero = (url, data) => {
		  return fetch(url, {
		    headers: {
		      'content-type': 'application/json'
		    },
		    method: 'POST', // *GET, POST, PUT, DELETE, etc.
		    body: JSON.stringify(data), // must match 'Content-Type' header
		  })
		  .then(response => response.json()) // parses response to JSON
		}

		postHero("http://35.180.32.33/nodejs/heroes", {name: this.state.newHeroName})
			.then(data => {
				this.props.addHero(data);
			})
			.catch(error => console.log(error))
	}

	handleDeleteHero(event, id) {
		const deleteHero = (url) => {
		  return fetch(url, {
		    headers: {
		      'content-type': 'application/json'
		    },
		    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
		  })
		  .then(response => response.json()) // parses response to JSON
		}

		deleteHero("http://35.180.32.33/nodejs/heroes/"+id)
			.then(data => {
				this.props.deleteHero(data);
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
					
					<Lists ul_class="heroes" specific_style={null} lists={this.props.lists} handleDeleteHero={this.handleDeleteHero} />
				
					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default Heroes