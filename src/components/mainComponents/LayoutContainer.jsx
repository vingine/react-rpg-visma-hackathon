import React, {Component} from 'react';
import './LayoutContainer.css';
import Canvas from "./Canvas";
import StatisticsMenu from "./StatisticsMenu";
import TargetMenu from "./TargetMenu";

class LayoutContainer extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="canvas">
                    <Canvas />
                </div>
                <div className="statistics-side-bar">
                    <StatisticsMenu />
                </div>
                <div className="target-bar">
                    <TargetMenu />
                </div>
            </div>
        );
    }
}

export default LayoutContainer;