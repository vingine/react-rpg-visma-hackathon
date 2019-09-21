import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from "./components/mainComponents/LayoutContainer";
import {MOVE_PLAYER} from "./utils/actionTypes";

class App extends Component {

    leftPressed = false;
    rightPressed = false;
    downPressed = false;
    upPressed = false;

    handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 65:
            case 37:
                this.leftPressed = true;
                break;
            case 68:
            case 39:
                this.rightPressed = true;
                break;
            case 83:
            case 40:
                this.downPressed = true;
                break;
            case 87:
            case 38:
                this.upPressed = true;
                break;
            default:
        }
    };

    handleKeyUp = (event) => {
        switch (event.keyCode) {
            case 65:
            case 37:
                this.leftPressed = false;
                break;
            case 68:
            case 39:
                this.rightPressed = false;
                break;
            case 83:
            case 40:
                this.downPressed = false;
                break;
            case 87:
            case 38:
                this.upPressed = false;
                break;
            default:
        }
    };

    handlePlayerMovement = () => {
        if (this.upPressed) {
            this.props.movePlayer({direction: 'UP'});
        } else if (this.downPressed) {
            this.props.movePlayer({direction: 'DOWN'});
        } else if (this.leftPressed) {
            this.props.movePlayer({direction: 'LEFT'});
        } else if (this.rightPressed) {
            this.props.movePlayer({direction: 'RIGHT'});
        }
    };

    componentDidMount() {
        document.onkeydown = this.handleKeyDown;
        document.onkeyup = this.handleKeyUp;

        setInterval(this.handlePlayerMovement, 85);
    }

    render() {
        return (
            <LayoutContainer />
        );
    }
}

App.propTypes = {
    movePlayer: PropTypes.func.isRequired,
    playerCoordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    })
};

export default App;
