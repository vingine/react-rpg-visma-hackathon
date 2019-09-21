import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {viewportWidth, viewportHeight, tileWidth, tileHeight, tileMapping} from "../../utils/constants";
import Backdrop from "../Backdrop";
import PlayerCanvas from "../Player";
import {connect} from "react-redux";
import Wall from "../Wall";

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
                        console.log("found WALL");
                        let x, y, key, coords;
                        x = col*tileWidth;
                        y = row*tileHeight;
                        key = row+'-'+col;
                        coords = {'x': x, 'y': y};
                        elements.push(<Wall coordinates={coords} key={key}/>);
                        break;
                    }

                    case tileMapping.PLAYER: {
                        console.log("found PLAYER");
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