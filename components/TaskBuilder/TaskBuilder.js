import React from 'react';
import ModalWindow from '../ModalWindow/ModalWinddow';
import { randomizeArray } from '../../lib/randomize';
import './TaskBuilderStyle.scss';

let numberList = [];

class TaskBuilder extends React.Component {
    constructor (props) {
        super(props);
        this.state = {questions: [], currentImg: 0, value: '', score: 0, loading: true, showScore: false};
    }
    componentWillMount() {
        this.fetchData();
        document.getElementById('quiz-body').classList.add('body-slideout');
    }
    fetchData() {
        numberList = [];
        fetch('https://raw.githubusercontent.com/FlyingCarpets/quiz-react/master/data/questions.json')
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
    bindSidebarActions() {
        let routerLinks = Array.from(document.getElementsByClassName('router-link'));
        let quizContainer = document.getElementById('quiz-wrapper');
        let sidebarMenu = document.getElementById('sidebar');
        let sidebarOverlay = document.getElementById('overlay');

        this.openSidebar(quizContainer, sidebarMenu, sidebarOverlay);

        routerLinks.map((link) => {
            link.addEventListener('click', () => {
                this.closeSidebar(quizContainer, sidebarMenu, sidebarOverlay);
            })
        });

        sidebarOverlay.addEventListener('click', () => {
            if(quizContainer.classList.contains('slide-right') && sidebarMenu.classList.contains('is-open')) {
                this.closeSidebar(quizContainer, sidebarMenu, sidebarOverlay);
             }
        });
    }
    openSidebar(quizContainer, sidebarMenu, sidebarOverlay) {
        quizContainer.classList.toggle('slide-right');
        sidebarMenu.classList.toggle('is-open');
        sidebarOverlay.classList.toggle('is-active');
    }
    closeSidebar(quizContainer, sidebarMenu, sidebarOverlay) {
        quizContainer.classList.remove('slide-right');
        sidebarMenu.classList.remove('is-open');
        sidebarOverlay.classList.remove('is-active');
    }
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
                    <button onClick={this.bindSidebarActions.bind(this)} className="btn">
                        Menu
                    </button>
                    <ModalWindow
                        showModal={this.state.showScore}
                        closeModal={this.closeModal.bind(this)}
                        score={this.state.score}/>
                    <div className="pull-right">
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
                    <div id="overlay" className="sidebar-overlay"></div>
                </div>
            )
        }
    }
}

export default TaskBuilder;
