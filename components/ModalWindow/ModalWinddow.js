import React from 'react';
import './ModalWindowStyle.scss';

class ModalWinddow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }
    showModal() {
        let currrentState = this.state.show;
        this.setState({show: !currrentState});
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#test" onClick={this.showModal.bind(this)}>
                    Launch demo modal
                </button>
                <div className={`modal fade ${this.state.show ? `show` : `hide` }`} id="test" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Modal content
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWinddow;
