import {MOVE_PLAYER} from "../utils/actionTypes";
import {viewportWidth, viewportHeight, tileWidth, tileHeight} from "../utils/constants";

const initialState = {
    playerCoordinates: {
        x: viewportWidth / 2,
        y: viewportHeight / 2
    }
};

function reducer(state = initialState, action) {
    if (action.type === MOVE_PLAYER) {
        if (action.payload.direction === 'UP') {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: this.state.playerCoordinates.x,
                    y: this.state.playerCoordinates.y - tileHeight
                }
            });
        } else if (action.payload.direction === 'DOWN') {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: this.state.playerCoordinates.x,
                    y: this.state.playerCoordinates.y + tileHeight
                }
            });
        } else if (action.payload.direction === 'LEFT') {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: this.state.playerCoordinates.x - tileWidth,
                    y: this.state.playerCoordinates.y
                }
            });
        } else if (action.payload.direction === 'RIGHT') {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: this.state.playerCoordinates.x + tileWidth,
                    y: this.state.playerCoordinates.y
                }
            });
        }
    }
    return state;
}

export default reducer;