import React from 'react';
import Header from './containers/Header/Header';
import User from './containers/User/User';
import Footer from './containers/Footer/Footer';

export default class App extends React.Component {
    render () {
        return (
            <div className="container">
                <Header/>
                <User/>
                <Footer/>
            </div>
        )
    }
}
