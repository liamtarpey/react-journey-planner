import React from 'react';
import ReactDOM from 'react-dom';

// Project root
import Root from './Root.jsx';

// Store
import Store from 'store/store.js';

// Styles
import './main.scss';

ReactDOM.render(
    <Root store={Store()} />, 
    document.getElementById('root')
);
