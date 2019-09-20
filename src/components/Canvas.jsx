import React, {Component} from 'react';

class Canvas extends Component {
    viewBox = [0, 0, 1600, 900];
    style = {
        border: '1px black solid'
    };
    center = {
        x: '16',
        y: '16'
    };

    render() {
        return (
            <svg
                id="game-canvas"
                preserveAspectRatio="xMaxYMax meet"
                viewBox={this.viewBox}
                style={this.style}
            >
                <circle cx={this.center.x} cy={this.center.y} r={16} />
            </svg>
        );
    }
}

export default Canvas;