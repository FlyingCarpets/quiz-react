import React from 'react';
import { BrowserRouter as Router, Link, Route, IndexRoute } from 'react-router-dom';
import TaskBuilder from '../TaskBuilder/TaskBuilder';

class AppContainer extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-wrapper">
                    <div>
                        <ul className="navbar-tabs">
                            <li className="navbar-tabs__item">
                                <Link to="/music" className="router-link">Music</Link>
                            </li>
                            <li className="navbar-tabs__item">
                                <Link to="/visual-art" className="router-link">Visual Art</Link>
                            </li>
                            <li className="navbar-tabs__item">
                                <Link to="/literature" className="router-link">Literature</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <Route path="/music" component={TaskBuilder} />
                </div>
            </Router>
        )
    }
}

export default AppContainer;
