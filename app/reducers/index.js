import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
	locationReducer,
	inputReducer
});

export default rootReducer;
