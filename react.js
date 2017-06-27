import ReactDOM from 'react-dom';
import React from 'react';
import MenuContainer from './components/MenuContainer/MenuContainer';

import './global';

import './stylesheets/main.scss';

const App = () => <MenuContainer/>;

ReactDOM.render(<App/>, document.getElementById('app'));
