const initialState = {
    tasks: [],
    taskLength: '',
    currentTask: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS': {
            return {...state, tasks: state.tasks.concat(action.payload)};
            break;
        }
    }
    return state;
};

export default taskReducer;
