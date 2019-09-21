import {MOVE_PLAYER} from "../utils/actionTypes";
import {initialMap, tileWidth, tileHeight, playerstats, enemystats} from "../utils/constants";
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
    tilemap: initialMap,
    monsters: {
        'monster-31-2': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-31-6': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-31-16': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-27-16': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-26-16': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-25-7': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-23-9': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-21-16': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-20-11': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-18-13': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-18-1': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-17-3': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-14-1': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-13-14': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-10-15': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-9-16': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-11-10': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-9-10': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-11-8': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-9-8': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-6-4': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-6-6': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-6-8': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-2-17': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        },
        'monster-2-2': {
            hp: enemystats.MonsterSmallOne.hp,
            attack: enemystats.MonsterSmallOne.attack,
        }
    }
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