import { combineReducers } from 'redux';

// Reducers
import RoutesReducer from 'reducers/routes.reducer.js';

export default combineReducers({
    routes: RoutesReducer
});
