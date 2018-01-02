import { combineReducers } from 'redux';

// Reducers
import RoutesReducer from 'reducers/routes.reducer.js';
import ViewReducer from 'reducers/view.reducer.js';

export default combineReducers({
    routes: RoutesReducer,
    view: ViewReducer
});
