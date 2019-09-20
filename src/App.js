import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from "./components/LayoutContainer";

class App extends Component {
    render() {
        return (
            <LayoutContainer />
        );
    }
}

App.propTypes = {
    message: PropTypes.string.isRequired
};

export default App;
