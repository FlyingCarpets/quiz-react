import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import TaskBuilder from '../TaskBuilder/TaskBuilder';

class MenuContainer extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-wrapper">
                    <div id="sidebar" className="sidebar">
                        Choose task category:
                        <ul>
                            <li><Link to="/music" className="router-link">Music</Link></li>
                            <li><Link to="/visual-art" className="router-link">Visual Art</Link></li>
                            <li><Link to="/literature" className="router-link">Literature</Link></li>
                        </ul>
                    </div>

                    <Route path="/music" component={TaskBuilder}/>
                </div>
            </Router>
        )
    }
}

export default MenuContainer;
