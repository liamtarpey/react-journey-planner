import { createStore } from 'redux';
import RootReducer from 'reducers/root.reducer.js';

export default () => {
    const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    return createStore(RootReducer, ComposeEnhancers);
};
