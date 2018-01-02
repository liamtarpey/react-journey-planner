import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

// Styles
import 'containers/MapArea.scss';

const MapboxAccessToken = 'pk.eyJ1IjoibGlhbXRhcnBleSIsImEiOiJjamJwc3F1azgwZGtnMndudG9tZ2VkdHRrIn0.e2oF14nq0qYNevwzMt2d-A';

class MapArea extends Component {

    render() {
        return (
            <div className="react-map">
                <ReactMapGL
                    width={500}
                    height={500}
                    latitude={37.7577}
                    longitude={-122.4376}
                    zoom={8}
                    mapboxApiAccessToken={MapboxAccessToken}
                    mapStyle={'mapbox://styles/mapbox/basic-v9'}
                />
            </div>
        );
    }
};

export default MapArea;
