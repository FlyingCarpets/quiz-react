import axios from 'axios';
import randomizeArray from '../lib/randomizeArray';

export function selectNextTask () {
    return {
        type: "SELECT_NEXT_TASK",
        payload: {}
    }
}

export function countScore() {
    return {
        type: "COUNT_SCORE",
        payload: 1
    }
}

export function fetchTasks() {
    return function(dispatch) {
        dispatch({ type: "BEFORE_FETCH_TASKS", payload: true });

        axios.get("https://raw.githubusercontent.com/FlyingCarpets/quiz-react/master/assets/data/questions.json")
            .then((response) => {
                dispatch({ type: "FETCH_TASKS", payload: randomizeArray(response.data) });
            })
            .then(() => {
                dispatch({ type: "SELECT_CURRENT_TASK", payload: 0 });
                dispatch({ type: "AFTER_FETCH_TASKS", payload: false });
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
