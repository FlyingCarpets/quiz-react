import React from 'react';
import { randomizeArray } from '../lib/randomize';

let numberList = [];

class TaskBuilder extends React.Component {
    constructor (props) {
        super(props);
        this.state = {questions: [], currentImg: 0, value: '', score: 0};
    }
    componentWillMount() {
        numberList = [];
        fetch('https://raw.githubusercontent.com/FlyingCarpets/quiz-react/master/data/questions.json')
            .then((response) => response.json())
            .then(json => {
                this.setState({questions: json});
                this.selectRandomTask();
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
            alert('the end');
            this.componentWillMount();
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
    render() {
        if(this.state.questions[this.state.currentImg] === undefined){
            return (
                <div className="container">
                    <h1>Loading...</h1>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="float-lg-right">
                    Your score:
                    <span>{this.state.score}</span>
                </div>
                <h2>What is this instrument called?</h2>
                <img src={this.state.questions[this.state.currentImg].image} alt=""/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control mt-3" placeholder="Answer"
                               value={this.state.value} onChange={this.handleChange.bind(this)}/>
                        <button className="btn btn-default mt-3" type="submit">Submit answer</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskBuilder;
