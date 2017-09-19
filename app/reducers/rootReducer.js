import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const reducers = combineReducers({
    taskData: taskReducer
});

export default reducers;
