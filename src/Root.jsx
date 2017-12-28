import React, { Component } from 'react';

// Containers
import SearchBar from 'containers/SearchBar.jsx';
import MapArea from 'containers/MapArea.jsx';

class Root extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <MapArea />
            </div>
        );
    }
}

export default Root;

