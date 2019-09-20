import {connect} from 'react-redux';

import React from 'react';
import PropTypes from 'prop-types';
import person from '../assets/game/person.svg';
import {tileHeight, tileWidth} from "../utils/constants";

const mapStateToProps = state => ({
    playerCoordinates: state.playerCoordinates
});

const Player = ({playerCoordinates}) => (
    <svg>
        <image
            x={playerCoordinates.x}
            y={playerCoordinates.y}
            width={tileWidth}
            height={tileHeight}
            href={person}
        />
    </svg>
);

Player.propTypes = {
    playerCoordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    })
};

const PlayerContainer = connect(mapStateToProps)(Player);

export default PlayerContainer;