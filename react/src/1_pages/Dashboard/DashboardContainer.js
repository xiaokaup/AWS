import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getAllHeroes, deleteAllHeroes } from '../../0_actions'

const mapStateToProps = (state, ownProps) => ({
	cards: state.heroes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch, // this dispatch is for the class component
	getAllHeroes: () => dispatch(getAllHeroes()),
	deleteAllHeroes: () => dispatch(deleteAllHeroes())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)