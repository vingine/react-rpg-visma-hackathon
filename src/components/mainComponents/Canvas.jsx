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

    initializeTiles(tilemap) {
        console.log("initializeTiles():", tilemap);

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
                        let x, y, key, coords;
                        x = col*tileWidth;
                        y = row*tileHeight;
                        key = row+'-'+col;
                        coords = {'x': x, 'y': y};
                        elements.push(<PlayerCanvas playerCoordinates={coords} key={key}/>);
                        break;
                    }

                    default:
                        break;
                }
            }
        }
        return elements;
    }

    constructor(props) {
        super(props);
        let elements = this.initializeTiles(props.tilemap);
        //console.log("con: ", elements);
        this.state = {elements: elements};
    }

    render() {
        /*let backdrop = ();<PlayerCanvas />*/
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