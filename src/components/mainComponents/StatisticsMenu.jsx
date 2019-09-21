import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './StatisticsMenu.css';
import {connect} from "react-redux";
import {maxHp, weapons, armors} from "../../utils/constants";

const mapStateToProps = state => ({
    playerStatistics: state.playerStatistics
});

class StatisticsMenu extends Component {
    render() {
        return (
            <div className="statistics-menu-base">
                <div className="vertical-container">
                    <div className="header-container">
                        <h1 className="header">Stats</h1>
                    </div>
                    <div className="container">
                        <label htmlFor="hp" className="content-label">Health</label>
                        <span id="hp" className="content">{this.props.playerStatistics.hp} / {maxHp}</span>
                    </div>
                    <div className="container">
                        <label htmlFor="attack" className="content-label">Attack Power</label>
                        <span id="attack" className="content">+ {this.props.playerStatistics.attack}</span>
                    </div>
                    <div className="container">
                        <label htmlFor="attack" className="content-label">Weapon</label>
                        <span id="attack" className="content">{weapons[this.props.playerStatistics.attack].name}</span>
                    </div>
                    <div className="container">
                        <label htmlFor="defense" className="content-label">Defense Strength</label>
                        <span id="defense" className="content">+ {this.props.playerStatistics.defense}</span>
                    </div>
                    <div className="container">
                        <label htmlFor="defense" className="content-label">Armor Type</label>
                        <span id="defense" className="content">{armors[this.props.playerStatistics.defense].name}</span>
                    </div>
                </div>

            </div>
        );
    }
}

StatisticsMenu.propTypes = {
    playerStatistics: PropTypes.shape({
        hp: PropTypes.number.isRequired,
        attack: PropTypes.number.isRequired,
        defense: PropTypes.number.isRequired
    })
};

const StatisticsMenuContainer = connect(mapStateToProps)(StatisticsMenu);

export default StatisticsMenuContainer;
