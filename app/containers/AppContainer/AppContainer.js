import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch
} from 'react-router-dom';
import Task from '../Task/Task';
import Footer from '../Footer/Footer';
import './AppContainer.scss';

const Home = () => <h1>Home</h1>;

class AppContainer extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-wrapper">
                    <div>
                        <ul className="navbar-tabs">
                            <li className="navbar-tabs__item">
                                <NavLink exact activeClassName="active" to="/" className="router-link">Home</NavLink>
                            </li>
                            <li className="navbar-tabs__item">
                                <NavLink to="/music" className="router-link">Music</NavLink>
                            </li>
                            <li className="navbar-tabs__item">
                                <NavLink to="/visual-art" className="router-link">Visual Art</NavLink>
                            </li>
                            <li className="navbar-tabs__item">
                                <NavLink to="/literature" className="router-link">Literature</NavLink>
                            </li>
                        </ul>
                    </div>

                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/music" component={ Task } />
                        <Route render={() => <h1>Page not found</h1>} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default AppContainer;
