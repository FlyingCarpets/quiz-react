import React from 'react';
import Header from './containers/Header/Header';
import Task from './containers/Task/Task';
import Footer from './containers/Footer/Footer';

export default class App extends React.Component {
    render () {
        return (
            <div className="container">
                <Header/>
                <Task/>
                <Footer/>
            </div>
        )
    }
}
