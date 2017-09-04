import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render () {
        const { name, surname } = this.props.userData;

        return (
            <header>
                <div className="row">
                    <div className="col-md-6">Header</div>
                    <div className="col-md-6">
                        Header user name:
                        <strong>{name} {surname}</strong>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect(
    (state) => ({ userData: state.userData })
)(Header);
