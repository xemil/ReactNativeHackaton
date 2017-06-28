
import createReducer from '../lib/createReducers'
import * as types from '../actions/types'
import { CHANGE_TEXTINPUT, CHANGE_AUTOUPDATE } from '../constants';

initialState = {
  textInput: '',
  autoUpdate: false
}

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXTINPUT:
      return {
        ...state,
        textInput: action.textInput
      }
    case CHANGE_AUTOUPDATE:
      return {
        ...state,
        autoUpdate: action.autoUpdate
      }
    default:
      return state
  }
}