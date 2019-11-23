import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getAllHeroes } from '../../0_actions'

const mapStateToProps = (state, ownProps) => ({
	cards: state.heroes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getFourHeroes: () => dispatch(getAllHeroes())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)