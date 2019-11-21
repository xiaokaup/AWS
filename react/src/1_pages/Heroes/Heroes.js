import React, { Fragment } from 'react'
import './Heroes.css'
import { Lists } from '../../3_elements/Lists'


class Heroes extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {lists: []}
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
							<input type="text" />
						</label>
						<button>
							add
						</button>
					</div>
					
					<Lists ul_class="heroes" specific_style={null} lists={this.state.lists} />
				
					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default Heroes