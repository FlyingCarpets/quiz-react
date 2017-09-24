import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'bootstrap.native';

class ModalWindow extends React.Component {
    componentDidMount() {
        this.initModal();
    }
    componentDidUpdate() {
        this.handleModalOpen();
    }
    initModal() {
        this.modal = new Modal(this.refs.customModal,
            {
                backdrop: true,
                keyboard: true
            });
    }
    handleModalOpen() {
        if (this.props.taskData.currentTask === "finish") {
            this.modal.show();
        }
    }
    render() {
        const {
            taskData: {
                score
            }
        } = this.props;
        return (
            <div>
                <div id="customModal"
                     ref="customModal"
                     className="modal fade"
                     tabIndex="-1"
                     role="dialog"
                     aria-hidden="true">

                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="text-heading">
                                    Heading
                                </h4>
                                <div className="btn-wrapper">
                                    <button type="button"
                                            className="btn--outlined"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                        <i className="fa fa-times" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>

                            <div className="modal-body">
                                Your score: { score }
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({ taskData: state.taskData }),
    null
)(ModalWindow);
