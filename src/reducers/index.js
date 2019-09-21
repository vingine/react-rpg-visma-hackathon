import {MOVE_PLAYER} from "../utils/actionTypes";
import {initialMap, tileWidth, tileHeight, playerstats} from "../utils/constants";
import movePlayer from "./movePlayer";

const initialState = {
    playerStatistics: {
        hp: playerstats.hp,
        attack: playerstats.attack,
        defense: playerstats.defense
    },
    playerCoordinates: {
        x: 15*tileWidth,
        y: 9*tileHeight
    },
    tilemap: initialMap
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