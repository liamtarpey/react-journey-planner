import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Containers
import SearchBar from 'containers/SearchBar.jsx';
import SearchResults from 'containers/SearchResults.jsx';
import MapArea from 'containers/MapArea.jsx';

class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { view } = this.props;
        return (
            <div>
                <SearchBar />
                { view.status === 'results' &&
                    <SearchResults />
                }
                { view.status === 'map' &&
                    <MapArea />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    view: state.view
});

Root.propTypes = {
    view: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(Root);
