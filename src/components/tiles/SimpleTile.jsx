import React from 'react';
import PropTypes from 'prop-types';
import wall from '../../assets/game/brick-wall.svg';
import sword from '../../assets/game/sword-smithing.svg';
import potion from '../../assets/game/health-potion.svg';
import armor from '../../assets/game/armor-upgrade.svg';
import monster from '../../assets/game/jawless-cyclop.svg';
import {tileHeight, tileWidth} from "../../utils/constants";

const SimpleTile = ({coordinates, tileType}) => {

    return (
        <svg>
            {tileType === 'wall' &&
                <image x={coordinates.x} y={coordinates.y} width={tileWidth} height={tileHeight}
                                               href={wall}
                />
            }
            {tileType === 'sword' &&
                <image x={coordinates.x} y={coordinates.y} width={tileWidth} height={tileHeight}
                       href={sword}
                />
            }
            {tileType === 'armor' &&
                <image x={coordinates.x} y={coordinates.y} width={tileWidth} height={tileHeight}
                       href={armor}
                />
            }
            {tileType === 'potion' &&
                <image x={coordinates.x} y={coordinates.y} width={tileWidth} height={tileHeight}
                       href={potion}
                />
            }
            {tileType === 'monster' &&
                <image x={coordinates.x} y={coordinates.y} width={tileWidth} height={tileHeight}
                       href={monster}
                />
            }
        </svg>
    );
};

SimpleTile.propTypes = {
    coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }),
    tileType: PropTypes.string.isRequired
};

export default SimpleTile;