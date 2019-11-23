import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { deleteAllHeroes } from '../../0_actions'
import { async_getAllHeroes } from '../../0_actions/fetchHeroes'

const mapStateToProps = (state, ownProps) => ({
	cards: state.heroes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch, // this dispatch is for the class component
	getAllHeroes: () => dispatch(async_getAllHeroes()),
	deleteAllHeroes: () => dispatch(deleteAllHeroes())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)