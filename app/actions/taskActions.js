import axios from 'axios';
import randomizeArray from '../lib/randomizeArray';

let taskLength;
function countTasks(tasks) {

    console.log(tasks.length);

    for(let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
        taskLength.push(i);
    }

    console.log(taskLength);
    return taskLength;
}

export function fetchTasks() {
    return function(dispatch) {
        axios.get("https://raw.githubusercontent.com/FlyingCarpets/quiz-react/master/assets/data/questions.json")
            .then((response) => {
                dispatch({type: "FETCH_TASKS", payload: response.data});
                countTasks(response.data);
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {})
    }
}

export function selectRandomTask(taskList) {
    console.log(taskList);
}
