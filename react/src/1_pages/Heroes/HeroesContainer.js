import { connect } from 'react-redux';
import Heroes from './Heroes';
import { getAllHeroes, addHero, deleteHero, deleteAllHeroes } from '../../0_actions'

const mapStateToProps = (state, ownProps) => ({
	lists: state.heroes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch,
	getAllHeroes: () => dispatch(getAllHeroes()),
	addHero: ({id, name}) => dispatch(addHero({id, name})),
	deleteHero: ({id}) => dispatch(deleteHero({id})),
	deleteAllHeroes: () => dispatch(deleteAllHeroes())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Heroes)