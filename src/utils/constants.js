export const viewportWidth = 1600;
export const viewportHeight = 900;

export const tileWidth = 48;
export const tileHeight = 48;

export const initialMap = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0,16,16,16,16, 0,16,16,16,16,16, 0,16,16, 4, 1, 0,16, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
        [0,16, 4, 4,16, 0,16, 0, 0, 0,16, 0,16, 0, 0, 0, 0,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
        [0,16, 4, 4,16, 0,16, 3, 3, 0,16, 0,16,16,16,16,16, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 0, 0],
        [0,16,16,16,16, 0, 4, 3, 3, 0,16, 0,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16,16,16,16,16, 3, 0, 3, 0, 0],
        [0,16,16,16,16, 0,16, 3, 3, 0,16, 0,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16, 3, 0,16, 0, 0],
        [0, 0,16,16, 0, 0, 4, 0, 0, 0,16, 0, 0, 0, 0,16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 3, 0, 4, 0, 0],
        [0, 0,16,16, 0, 0,16, 0, 3,16,16,16, 3, 0, 0,16, 0, 0,16,16,16,16,16,16,16, 4, 3, 0,16, 0, 0,16, 0, 0],
        [0, 0,16,16, 0, 0, 4, 0,16, 4,16, 4,16, 0,16,16,16, 0,16, 0, 0, 0,16,16,16,16,16, 0,16, 0, 0,16, 0, 0],
        [0, 0,16,16, 0, 0,16, 0,16,16, 1,16,16,16,16,20,16,16,16, 0, 1, 0, 3, 4,16,16,16, 0,16, 0, 0,16, 0, 0],
        [0, 0,16,16, 0, 0,16, 0,16, 4,16, 4,16, 0,16,16,16, 0, 0, 0, 4, 0, 0, 0, 0, 0,16, 0,16, 0, 0,16, 0, 0],
        [0, 0, 0,16, 0, 0,16, 0, 3,16,16,16, 3, 0, 0,16, 0, 0, 3, 0,16,16,16,16,16,16,16, 0,16,16,16,16, 0, 0],
        [0, 0,16,16, 0, 0,16, 0, 0, 0, 0, 0, 0, 0, 0,16,16,16, 4, 0, 0, 0, 0, 0, 0, 0,16, 0, 0, 0, 0, 0, 0, 0],
        [0, 0,16, 0, 0, 0,16,16,16,16,16, 0, 2, 4,16,16, 0, 0, 0, 0,16,16,16,16,16, 0,16, 3,16,16,16, 0, 0, 0],
        [0, 0,16,16,16,16,16,16,16,16, 4, 0, 0,16, 0,16,16,16, 0, 0,16, 0, 0, 0,16, 0, 0, 0, 0, 0,16, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0,16, 4, 1, 0, 0,16, 0, 0, 0,16, 0, 0,16, 4, 1, 0,16, 0, 0, 0, 2, 0,16, 0, 0, 0],
        [0, 1, 4,16,16,16, 3, 0, 0, 0, 0, 0, 0,16, 0, 3, 3,16, 0, 0, 0, 0, 0, 0,16,16, 4, 4,16, 0,16, 4, 2, 0],
        [0, 0, 0, 0, 0,16,16,16,16,16,16,16,16,16, 0, 3, 3,16,16,16,16,16,16,16,16, 0, 0, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const tileMapping = {
    WALL: 0,
    EMPTY: 16,
    PLAYER: 20,
    MONSTER: 4,
    ARMOR: 2,
    SWORD: 1,
    POTION: 3/*,
    1: 'weapon',
    2: 'armor',
    3: 'potion',
    4: 'monster-small-1',
    5: 'monster-boss-1',
    6: 'monster-small-2',
    7: 'monster-big-2',
    8: 'monster-boss-2',
    9: 'monster-small-3',
    10: 'monster-big-3',
    11: 'monster-boss-3',
    12: 'monster-small-4',
    13: 'monster-big-4',
    14: 'monster-special-4',
    15: 'final-boss',
    16: 'empty',
    20: 'player'*/
};

export const weapons = {
    1: {
        'name': 'bludgeon',
        'attack': 1
    },
    2: {
        'name': 'longsword',
        'attack': 2
    },
    3: {
        'name': 'greatsword',
        'attack': 3
    },
    4: {
        'name': 'enchanted dagger',
        'attack': 4
    },
    5: {
        'name': 'enchanted longsword',
        'attack': 5
    },
    6: {
        'name': 'enchanted greatsword',
        'attack': 6
    },
    7: {
        'name': 'excalibur',
        'attack': 7
    }
};

export const armors = {
    1: {
        'name': 'cloth',
        'defense': 0
    },
    2: {
        'name': 'leather',
        'defense': 1
    },
    3: {
        'name': 'bronze',
        'defense': 2
    },
    4: {
        'name': 'iron',
        'defense': 3
    },
    5: {
        'name': 'mythril',
        'defense': 4
    },
    6: {
        'name': 'adamantium',
        'defense': 5
    }
};

export const enemystats = {
    'MonsterSmallOne': {
        'hp': 5,
        'attack': 5
    },
    'MonsterSmallTwo': {
        'hp': 6,
        'attack': 6
    },
    'MonsterSmallThree': {
        'hp': 10,
        'attack': 7
    },
    'MonsterSmallFour': {
        'hp': 40,
        'attack': 5
    },
    'MonsterBigTwo': {
        'hp': 12,
        'attack': 6
    },
    'MonsterBigThree': {
        'hp': 20,
        'attack': 7
    },
    'MonsterBigFour': {
        'hp': 40,
        'attack': 10
    },
    'MonsterSpecialFour': {
        'hp': 5,
        'attack': 15
    },
    'BossOne': {
        'hp': 20,
        'attack': 5
    },
    'BossTwo': {
        'hp': 40,
        'attack': 10
    },
    'BossThree': {
        'hp': 60,
        'attack': 10
    },
    'BossFour': {
        'hp': 70,
        'attack': 15
    }
};

export const playerstats = {
    'hp': 200,
    'attack': 1,
    'defense': 1
};

export const maxHp = 200;