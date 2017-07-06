import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './containers/AppContainer/AppContainer';

import './global';

import '../assets/scss/main.scss';

const App = () => <AppContainer/>;

ReactDOM.render(<App/>, document.getElementById('app'));
