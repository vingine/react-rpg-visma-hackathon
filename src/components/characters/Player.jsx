import React, {Component} from 'react';
import person from '../../assets/game/person.svg';
import {tileHeight, tileWidth, viewportHeight, viewportWidth} from "../../utils/constants";

class Person extends Component {

    initialCoords = {
        x: viewportWidth / 2,
        y: viewportHeight / 2
    };

    render() {
        return (
            <image
                x={this.initialCoords.x}
                y={this.initialCoords.y}
                width={tileWidth}
                height={tileHeight}
                href={person}
            />
        )
    }
}

export default Person;