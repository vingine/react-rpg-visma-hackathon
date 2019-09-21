import React, {Component} from 'react';
import './LayoutContainer.css';
import CanvasContainer from "./Canvas";
import StatisticsMenuContainer from "./StatisticsMenu";
import TargetMenu from "./TargetMenu";

class LayoutContainer extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="canvas">
                    <CanvasContainer />
                </div>
                <div className="statistics-side-bar">
                    <StatisticsMenuContainer />
                </div>
                <div className="target-bar">
                    <TargetMenu />
                </div>
            </div>
        );
    }
}

export default LayoutContainer;