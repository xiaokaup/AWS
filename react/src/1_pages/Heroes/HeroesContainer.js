import { connect } from 'react-redux';
import Heroes from './Heroes';
import { deleteAllHeroes } from '../../0_actions'
import { async_getAllHeroes, aysnc_postHero, aysnc_deleteHero } from '../../0_actions/fetchHeroes'

const mapStateToProps = (state, ownProps) => ({
	listHeroes: state.heroes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch,
	getAllHeroes: () => dispatch(async_getAllHeroes()),
	addHero: (name) => dispatch(aysnc_postHero(name)),
	deleteHero: (id) => dispatch(aysnc_deleteHero(id)),
	deleteAllHeroes: () => dispatch(deleteAllHeroes())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Heroes)