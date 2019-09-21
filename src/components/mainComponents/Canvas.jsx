import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {viewportWidth, viewportHeight, tileWidth, tileHeight, tileMapping} from "../../utils/constants";
import Backdrop from "../Backdrop";
import PlayerCanvas from "../tiles/Player";
import {connect} from "react-redux";
import SimpleTile from "../tiles/SimpleTile";

const mapStateToProps = state => ({
    tilemap: state.tilemap
});

class Canvas extends Component {
    viewBox = [0, 0, viewportWidth, viewportHeight];

    initializeTiles(tilemap, update = false) {
        let elements = [];

        for (let row = 0; row < tilemap.length; row++) {
            let tileRow = tilemap[row];
            for (let col = 0; col < tileRow.length; col++) {
                switch (tileRow[col]) {
                    case tileMapping.WALL: {
                        let x, y, key, coords;
                        x = col*tileWidth;
                        y = row*tileHeight;
                        key = row+'-'+col;
                        coords = {'x': x, 'y': y};
                        elements.push(<SimpleTile coordinates={coords} key={key} tileType={'wall'}/>);
                        break;
                    }

                    case tileMapping.MONSTER: {
                        let x, y, key, coords;
                        x = col*tileWidth;
                        y = row*tileHeight;
                        key = row+'-'+col;
                        coords = {'x': x, 'y': y};
                        elements.push(<SimpleTile coordinates={coords} key={key} tileType={'monster'}/>);
                        break;
                    }

                    case tileMapping.ARMOR: {
                        let x, y, key, coords;
                        x = col*tileWidth;
                        y = row*tileHeight;
                        key = row+'-'+col;
                        coords = {'x': x, 'y': y};
                        elements.push(<SimpleTile coordinates={coords} key={key} tileType={'armor'}/>);
                        break;
                    }

                    case tileMapping.SWORD: {
                        let x, y, key, coords;
                        x = col*tileWidth;
                        y = row*tileHeight;
                        key = row+'-'+col;
                        coords = {'x': x, 'y': y};
                        elements.push(<SimpleTile coordinates={coords} key={key} tileType={'sword'}/>);
                        break;
                    }

                    case tileMapping.POTION: {
                        let x, y, key, coords;
                        x = col*tileWidth;
                        y = row*tileHeight;
                        key = row+'-'+col;
                        coords = {'x': x, 'y': y};
                        elements.push(<SimpleTile coordinates={coords} key={key} tileType={'potion'}/>);
                        break;
                    }

                    case tileMapping.PLAYER: {
                        if (!update) {
                            let x, y, key, coords;
                            x = col*tileWidth;
                            y = row*tileHeight;
                            key = 'player';
                            coords = {'x': x, 'y': y};
                            elements.push(<PlayerCanvas playerCoordinates={coords} key={key}/>);
                            break;
                        } else {
                            break;
                        }
                    }

                    default:
                        break;
                }
            }
        }
        return elements;
    }

    compare2DArrays(arr1, arr2) {
        let result = true;

        for (let row = 0; row < arr1.length; row++) {
            let tileRow = arr1[row];
            for (let col = 0; col < tileRow.length; col++) {
                if (tileRow[col] !== tileMapping.PLAYER && tileRow[col] !== arr2[row][col]) {
                    result = false;
                    break;
                }
            }
            if (!result) {
                break;
            }
        }

        return result;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.compare2DArrays(this.props.tilemap, prevProps.tilemap)) {
            let playerElement = prevState.elements.find((elem) => {
                return elem.key === 'player';
            });
            let elements = this.initializeTiles(this.props.tilemap, true).concat(playerElement);
            this.setState({elements: elements});
        }
    }

    constructor(props) {
        super(props);
        let elements = this.initializeTiles(props.tilemap);
        this.state = {elements: elements};
    }

    render() {
        return (
            <svg
                id="game-canvas"
                preserveAspectRatio="xMaxYMax meet"
                viewBox={this.viewBox}
            >
                <Backdrop />
                {this.state.elements.map(element => element)}

            </svg>
        );
    }
}

Canvas.propTypes = {
    tilemap: PropTypes.array.isRequired
};

const CanvasContainer = connect(mapStateToProps)(Canvas);

export default CanvasContainer;