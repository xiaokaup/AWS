import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getAllHeroes, deleteAllHero } from '../../0_actions'

const mapStateToProps = (state, ownProps) => ({
	cards: state.heroes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatch, // this dispatch is for the class component
	getFourHeroes: () => dispatch(getAllHeroes()),
	hideFourHeroes: () => dispatch(deleteAllHero())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)