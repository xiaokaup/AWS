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
		const style_content_box = {
			boxSizing: "content-box"
		}
		return (
			<Fragment>
				<div id="messages">
					{/*<app-messages></app-messages>*/}
				</div>
				<div id="content">
					<h2>My Heroes</h2>
					
					<Lists ul_class="heroes" style={style_content_box} lists={this.state.lists} />
					

					<div>
						<label>Hero name:
							<input type="text" />
						</label>
						<button>
							add
						</button>
					</div>
					{/*<app-hero-search></app-hero-search>*/}
				</div>
			</Fragment>
		);
	}
}

export default Heroes