import { connect } from 'react-redux'
import HeroDetail from './HeroDetail'
import { aysnc_updateHero } from '../../0_actions/fetchHeroes'

// mapStateToProps

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch,
	updateHero: ({id, name}) => dispatch(aysnc_updateHero({id, name}))
})

export default connect(
	null,
	mapDispatchToProps
)(HeroDetail)