import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import taskReducer from './taskReducer';

const reducers = combineReducers({
    userData: nameReducer,
    taskData: taskReducer
});

export default reducers;