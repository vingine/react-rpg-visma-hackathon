import {MOVE_PLAYER} from "../utils/actionTypes";

export const movePlayer = payload => {
    return {type: MOVE_PLAYER, payload};
};