import {connect} from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({
    playerCoordinates: state.playerCoordinates
});

const Game = connect(mapStateToProps)(App);

export default Game;
