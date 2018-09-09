
import {combineReducers} from 'redux';

// reducers

import todo from './modules/todo';

const rootReducer = combineReducers({
    todo,
})

export default rootReducer;