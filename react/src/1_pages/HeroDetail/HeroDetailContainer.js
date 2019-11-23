import { connect } from 'react-redux'
import HeroDetail from './HeroDetail'
import { updateHero } from '../../0_actions'

// mapStateToProps

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch,
	updateHero: ({id, name}) => dispatch(updateHero({id, name}))
})

export default connect(
	null,
	mapDispatchToProps
)(HeroDetail)