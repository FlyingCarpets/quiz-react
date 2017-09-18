import React from 'react';
import ModalWindow from '../ModalWindow/ModalWinddow';
import { randomizeArray } from '../../lib/randomize';
import './TaskBuilder.scss';

let numberList = [];

class TaskBuilder extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            questions: [],
            currentImg: 0,
            value: '',
            score: 0,
            loading: true,
            showScore: false
        };
    }
    componentWillMount() {
        this.fetchData();
    }
    fetchData() {
        numberList = [];
        fetch('https://raw.githubusercontent.com/FlyingCarpets/quiz-react/master/assets/data/questions.json')
            .then((response) => response.json())
            .then(json => {
                this.setState({questions: json});
                this.selectRandomTask();
                this.setState({loading: false});
            });
    }
    selectRandomTask() {
        for(let i=0;i<this.state.questions.length;i++) {
            numberList.push(i);
        }
        randomizeArray(numberList);
        this.setState({currentImg: numberList[0]});
    }
    selectNextTask() {
        let taskIndex = numberList.indexOf(this.state.currentImg);
        if(taskIndex < this.state.questions.length -1) {
            taskIndex++;
        } else {
            this.setState({showScore: true});
            this.setState({loading: true});
            this.fetchData();
        }
        this.setState({currentImg: numberList[taskIndex]});
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.questions[this.state.currentImg].answer == this.state.value) {
            alert('correct');

            let currentPoints = this.state.score;
            currentPoints++;
            this.setState({score: currentPoints});

            this.selectNextTask();
        } else {
            alert('try again');
        }
        this.setState({value: ''});
    }
    closeModal() {
        this.setState({showScore: false});
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
        if(this.state.loading == true){
            return (
                <div className="container">
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div className="container quiz-wrapper" id="quiz-wrapper">
                    <ModalWindow
                        showModal={this.state.showScore}
                        closeModal={this.closeModal.bind(this)}
                        score={this.state.score}/>
                    <div className="pull-right">
                        Your score:
                        <span>{this.state.score}</span>
                    </div>
                    
                    <div className="quiz">
                        <h2 className="quiz__heading">What is this instrument called?</h2>
                        <img className="quiz__img img-fluid" src={this.state.questions[this.state.currentImg].image} alt=""/>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" className="form-control mt-3" placeholder="Answer"
                                       value={this.state.value} onChange={this.handleChange.bind(this)}/>
                                <button className="btn btn-default mt-3" type="submit">Submit answer</button>
                            </div>
                        </form>
                    </div>
                    
                    <div id="overlay" className="sidebar-overlay"></div>

                    {/* TODO: for creating new users */}
                    {/*<button onClick={ this.createUser.bind(this) }>Create user</button>*/}
                </div>
            )
        }
    }
}

export default TaskBuilder;
