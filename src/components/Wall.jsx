import React from 'react';
import PropTypes from 'prop-types';
import wall from '../assets/game/brick-wall.svg';
import {tileHeight, tileWidth} from "../utils/constants";

const Wall = ({coordinates}) => {
    return (
        <svg>
            <image
                x={coordinates.x}
                y={coordinates.y}
                width={tileWidth}
                height={tileHeight}
                href={wall}
            />
        </svg>
    );
};

Wall.propTypes = {
    coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    })
};

export default Wall;

