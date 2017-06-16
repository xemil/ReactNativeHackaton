import { GETTING_LOCATION, GOT_LOCATION_FAILED, GOT_LOCATION_SUCCESS, POST_LOCATION, GOT_NAME } from '../constants';

const initialState = {
  data: {},
  error: null
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_LOCATION:
      return {
        ...state,
        data: {}
      }
    case GOT_LOCATION_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case GOT_LOCATION_FAILED:
      return {
        ...state,
        error: action.error
      }
    case POST_LOCATION:
      return {
        ...state,
        data: action.data
      }
      case GOT_NAME:
      return {
        ...state,
        name: action.name
      }

    default:
      return state
  }
}
  