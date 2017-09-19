import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/AppContainer/AppContainer';

import './global';

import '../assets/scss/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);