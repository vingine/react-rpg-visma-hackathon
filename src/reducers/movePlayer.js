import {tileHeight, tileWidth} from "../utils/constants";

function movePlayer(state, action) {
    if (action.payload.direction === 'UP') {
        return Object.assign({}, state, {
            playerCoordinates: {
                x: state.playerCoordinates.x,
                y: state.playerCoordinates.y - tileHeight
            }
        });
    } else if (action.payload.direction === 'DOWN') {
        return Object.assign({}, state, {
            playerCoordinates: {
                x: state.playerCoordinates.x,
                y: state.playerCoordinates.y + tileHeight
            }
        });
    } else if (action.payload.direction === 'LEFT') {
        return Object.assign({}, state, {
            playerCoordinates: {
                x: state.playerCoordinates.x - tileWidth,
                y: state.playerCoordinates.y
            }
        });
    } else if (action.payload.direction === 'RIGHT') {
        return Object.assign({}, state, {
            playerCoordinates: {
                x: state.playerCoordinates.x + tileWidth,
                y: state.playerCoordinates.y
            }
        });
    }
}

export default movePlayer;