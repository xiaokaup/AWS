import { connect } from 'react-redux'
import HeroDetail from './HeroDetail'
import { aysnc_updateHero, async_getByIdHero } from '../../0_actions/fetchHeroes'

// mapStateToProps

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch,
	getByIdHero: (id) => dispatch(async_getByIdHero(id)),
	updateHero: ({id, name}) => dispatch(aysnc_updateHero({id, name}))
})

export default connect(
	null,
	mapDispatchToProps
)(HeroDetail)