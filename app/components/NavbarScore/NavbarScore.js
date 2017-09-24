import React from 'react';
import { connect } from 'react-redux';

import './NavbarScore.scss';

class NavbarScore extends React.Component {
    render() {
        const
            { taskData: {
                score
            }
        } = this.props;

        return (
            <div className="navbar-score">
                <div>Score: { score }</div>
            </div>
        )
    }
}

export default connect(
    (state) => ({ taskData: state.taskData }), null
)(NavbarScore);
