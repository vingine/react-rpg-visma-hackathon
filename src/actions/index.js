import {MOVE_PLAYER} from "../utils/actionTypes";

export function movePlayer (payload) {
    return {type: MOVE_PLAYER, payload};
}