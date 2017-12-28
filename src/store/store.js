import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import RootReducer from 'reducers/root.reducer.js';

export default () => {
    const Middlewares = [Thunk];
    const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(RootReducer, ComposeEnhancers(applyMiddleware(...Middlewares)));
};
