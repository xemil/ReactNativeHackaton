import { combineReducers } from 'redux'
import locationReducer from './locationReducer'
import textinputReducer from './textinputReducer'

const rootReducer = combineReducers({
    locationReducer,
    //ERROR HERE
    textinputReducer
})

export default rootReducer
