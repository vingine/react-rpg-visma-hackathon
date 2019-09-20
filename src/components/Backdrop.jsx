import React, {Component} from 'react';

class Backdrop extends Component {
    style = {
        fill: '#311A07'
    };

    render() {
        return (
            <rect
                style={this.style}
                x={0}
                y={0}
                width={5000}
                height={900}
            />
        );
    }
}

export default Backdrop;