import {connect} from 'react-redux';

import App from '../App';
import {movePlayer} from "../actions/movePlayer";

const mapStateToProps = state => ({
    playerCoordinates: state.playerCoordinates
});

const mapDispatchToProps = dispatch => {
    return ({
        movePlayer: (payload) => {
            dispatch(movePlayer(payload));
        }
    });
}

const Game = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Game;
