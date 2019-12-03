import React, { Fragment } from 'react'
import './MessagesLog.css'


const MessageLogView = props => {
	return props.messages.map(element => <div>{element}</div>)
}

const MessagesLogView = props => {
	return (
		<Fragment>	
		{
			props.messages.length !== 0
			&&
			<div id="messages">
				<h3>Messages</h3>
				<button class="clear" onClick={props.clearMessages}>clear</button>
				<MessageLogView messages={props.messages} />
			</div>
		}
		</Fragment>
	);
}

export default MessagesLogView