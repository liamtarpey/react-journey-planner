import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Project root
import Root from './Root.jsx';

// Store
import Store from 'store/store.js';

// Styles
import './main.scss';

const store = Store();
const RootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    RootElement
);
