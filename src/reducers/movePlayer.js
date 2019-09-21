import {tileHeight, tileMapping, tileWidth} from "../utils/constants";

function movePlayer(state, action) {
    let playerCurrentTile = {
        x: state.playerCoordinates.x / tileWidth,
        y: state.playerCoordinates.y / tileHeight
    };

    if (action.payload.direction === 'UP') {
        return tryMovePlayerUp(state, playerCurrentTile);
    } else if (action.payload.direction === 'DOWN') {
        return tryMovePlayerDown(state, playerCurrentTile);
    } else if (action.payload.direction === 'LEFT') {
        return tryMovePlayerLeft(state, playerCurrentTile);
    } else if (action.payload.direction === 'RIGHT') {
        return tryMovePlayerRight(state, playerCurrentTile);
    }
}

function tryMovePlayerUp(state, currentCoords) {
    switch (state.tilemap[currentCoords.y-1][currentCoords.x]) {
        // Allow move
        case tileMapping.EMPTY: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x,
                    y: state.playerCoordinates.y - tileHeight
                }
            });
        }
        //Remove spawn point and allow move
        case tileMapping.PLAYER: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x,
                    y: state.playerCoordinates.y - tileHeight
                },
                tilemap: state.tilemap.map((row, index) => {
                    if (index === currentCoords.y - 1) return row.map((col, index) => {
                        if (index === currentCoords.x) return tileMapping.EMPTY;
                        return col;
                    });
                    return row;
                })
            });
        }
        default:
            return state;
    }
}

function tryMovePlayerDown(state, currentCoords) {
    switch (state.tilemap[currentCoords.y+1][currentCoords.x]) {
        case tileMapping.EMPTY: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x,
                    y: state.playerCoordinates.y + tileHeight
                }
            });
        }
        case tileMapping.PLAYER: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x,
                    y: state.playerCoordinates.y + tileHeight
                },
                tilemap: state.tilemap.map((row, index) => {
                    if (index === currentCoords.y + 1) return row.map((col, index) => {
                        if (index === currentCoords.x) return tileMapping.EMPTY;
                        return col;
                    });
                    return row;
                })
            });
        }
        default:
            return state;
    }
}

function tryMovePlayerLeft(state, currentCoords) {
    switch (state.tilemap[currentCoords.y][currentCoords.x-1]) {
        case tileMapping.EMPTY: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x - tileWidth,
                    y: state.playerCoordinates.y
                }
            });
        }
        case tileMapping.PLAYER: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x - tileWidth,
                    y: state.playerCoordinates.y
                },
                tilemap: state.tilemap.map((row, index) => {
                    if (index === currentCoords.y) return row.map((col, index) => {
                        if (index === currentCoords.x - 1) return tileMapping.EMPTY;
                        return col;
                    });
                    return row;
                })
            });
        }
        default:
            return state;
    }
}

function tryMovePlayerRight(state, currentCoords) {
    switch (state.tilemap[currentCoords.y][currentCoords.x+1]) {
        case tileMapping.EMPTY: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x + tileWidth,
                    y: state.playerCoordinates.y
                }
            });
        }
        case tileMapping.PLAYER: {
            return Object.assign({}, state, {
                playerCoordinates: {
                    x: state.playerCoordinates.x + tileWidth,
                    y: state.playerCoordinates.y
                },
                tilemap: state.tilemap.map((row, index) => {
                    if (index === currentCoords.y) return row.map((col, index) => {
                        if (index === currentCoords.x + 1) return tileMapping.EMPTY;
                        return col;
                    });
                    return row;
                })
            });
        }
        default:
            return state;
    }
}

export default movePlayer;