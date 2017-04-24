import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import TaskBuilder from './components/TaskBuilder/TaskBuilder';

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/visual-art">Visual Art</Link></li>
                <li><Link to="/literature">Literature</Link></li>
            </ul>

            <Route  path="/music" component={TaskBuilder}/>
        </div>
    </Router>,
    document.getElementById('app')
);
