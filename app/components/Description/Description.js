import React from 'react';
import { connect } from 'react-redux';
import { fetchDescription } from '../../actions/taskActions';

class Description extends React.Component {
    fetchDescription() {
        this.props.fetchDescription();
    }
    render() {
        const { description } = this.props.infoData.description;

        return (
            <div className="p-t-15">
                <button onClick={this.fetchDescription.bind(this)} className="btn">
                    Fetch description (api)
                </button>
                <div>
                    Description:
                    <div>
                        <strong>{description}</strong>
                        </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({infoData: state.infoData}),
    { fetchDescription }
)(Description);
