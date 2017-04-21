import React from 'react';
import './ModalWindowStyle.scss';

class ModalWinddow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }
    closeModal() {
        this.props.closeModal();
    }
    render() {
        return (
            <div>
                <div className={`modal fade ${this.props.showModal ? `show` : `hide` }`} id="app-modal" tabIndex="-1"
                     role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Your score is: </h5>
                                <button onClick={this.closeModal.bind(this)} type="button" className="close"
                                        data-dismiss="modal" aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <h5>{this.props.score}</h5>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.closeModal.bind(this)} type="button" className="btn btn-secondary"
                                        data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`modal-backdrop fade show ${this.props.showModal ? `is-active` : `is-hidden` }`}></div>
            </div>
        )
    }
}

export default ModalWinddow;
