import { connect } from 'react-redux';
import MessagesLogView from './MessagesLogView';
import { clearMessages } from '../../0_actions'

const mapStateToProps = (state, ownProps) => ({
	messages: state.messages
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch,
	clearMessages: () => dispatch(clearMessages())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessagesLogView)