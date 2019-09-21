import {MOVE_PLAYER} from "../utils/actionTypes";
import {viewportWidth, viewportHeight} from "../utils/constants";
import movePlayer from "./movePlayer";

const initialState = {
    playerCoordinates: {
        x: viewportWidth / 2,
        y: viewportHeight / 2
    },
    tilemap: [

    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_PLAYER:
            return movePlayer(state, action);
        default:
            return state;
    }
}

export default reducer;