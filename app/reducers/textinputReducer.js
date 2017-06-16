
import createReducer from '../lib/createReducers'
import * as types from '../actions/types'
import { CHANGE_TEXTINPUT } from '../constants';

initialState = {
  textInput: ''
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXTINPUT:
      return {
        ...state,
        textInput: action.textInput
      }
    default:
      return state
  }
}