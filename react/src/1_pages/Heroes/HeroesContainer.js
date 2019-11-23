import { connect } from 'react-redux';
import Heroes from './Heroes';
import { addHero, deleteHero, deleteAllHeroes } from '../../0_actions'
import { async_getAllHeroes } from '../../0_actions/fetchHeroes'

const mapStateToProps = (state, ownProps) => ({
	lists: state.heroes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch,
	getAllHeroes: () => dispatch(async_getAllHeroes()),
	addHero: ({id, name}) => dispatch(addHero({id, name})),
	deleteHero: ({id}) => dispatch(deleteHero({id})),
	deleteAllHeroes: () => dispatch(deleteAllHeroes())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Heroes)