import React, {Component} from 'react';
import Backdrop from "../Backdrop";
import {viewportWidth, viewportHeight} from "../../utils/constants";
import PlayerContainer from "../../containers/PlayerContainer";


class Canvas extends Component {
    viewBox = [0, 0, viewportWidth, viewportHeight];
    style = {
        border: '1px black solid'
    };

    render() {
        return (
            <svg
                id="game-canvas"
                preserveAspectRatio="xMaxYMax meet"
                viewBox={this.viewBox}
                style={this.style}
            >
                <Backdrop />
                <PlayerContainer />
            </svg>
        );
    }
}

export default Canvas;