import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const fetchedData = createReducer({}, () => {
    console.log('mydatajs fetcheddata');
});