import { combineReducers } from 'redux';

// Reducers
import MapReducer from 'reducers/map.reducer.js';

export default combineReducers({
    map: MapReducer
});
