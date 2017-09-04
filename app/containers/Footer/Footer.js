import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render () {
        const { name, surname } = this.props.userData;

        return (
            <footer>
                <div className="row">
                    <div className="col-md-6">Footer</div>
                    <div className="col-md-6">
                        Footer user name:
                        <strong>{name} {surname}</strong>
                    </div>
                </div>
            </footer>
        )
    }
}

export default connect(
    (state) => ({userData: state.userData})
)(Footer);
