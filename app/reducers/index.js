import { combineReducers } from 'redux';
import * as myDataReducer from './myData';

export default combineReducers(Object.assign(
    myDataReducer
));