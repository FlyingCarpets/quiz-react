import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, selectNextTask } from '../../actions/taskActions';
import './Task.scss';

class Task extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
        this.props.fetchTasks();
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        const {
            taskData: {
                currentTask
            }
        } = this.props;

        if (this.state.value === currentTask.answer) {
            alert('correct');
            this.props.selectNextTask();
        } else {
            alert('Boo');
        }

        this.setState({value: ''});
    }
    // TODO: for creating/posting new user
    // createUser() {
    //     fetch('/api/users', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name: 'New user name'})
    //     })
    // }
    render() {
        const {
            taskData: {
                currentTask,
                loading
            }
        } = this.props;

        return (
            <div className="container">
                <h2 className="quiz__heading">What is this instrument called?</h2>
                { loading
                    ?
                    <div className="spinner" />
                    :
                    <div>
                        { currentTask !== 'finish'
                            ?
                            <div>
                                <img className="quiz__img img-fluid" src={ currentTask.image } alt=""/>
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Answer"
                                               value={ this.state.value } onChange={ this.handleChange } />
                                        <button className="btn" type="submit">Submit answer</button>
                                    </div>
                                </form>

                                {/* TODO: for creating new users */}
                                {/*<button onClick={ this.createUser.bind(this) }>Create user</button>*/}
                            </div>
                            :
                            <div>The end</div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default connect(
    (state) => ({ taskData: state.taskData }),
    { fetchTasks, selectNextTask }
)(Task);
