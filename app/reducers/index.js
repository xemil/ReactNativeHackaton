/*
import { combineReducers } from 'redux';
import * as myDataReducer from './myData';

export default combineReducers(Object.assign(
    myDataReducer
));
*/
import { combineReducers } from 'redux'
import locationData from './locationReducer'

const rootReducer = combineReducers({
    locationData
})

export default rootReducer
