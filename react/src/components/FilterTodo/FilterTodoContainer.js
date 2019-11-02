import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions'
import button from '../0_Common/button/button'

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(button)