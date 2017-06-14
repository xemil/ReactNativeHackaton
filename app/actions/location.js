import {GETTING_LOCATION, GOT_LOCATION_FAILED, GOT_LOCATION_SUCCESS} from '../constants';

export function getLocation() {
  return {
    type: GETTING_LOCATION
  }
}

export function gotLocation(loc) {
  return {
    type: GOT_LOCATION_SUCCESS,
    data: loc
  }
}

export function getLocationFailed(ex) {
  return {
    type: GOT_LOCATION_FAILED,
    error: ex
  }
}

export function getCurrentPosition() {
  console.log('getCurrentPosition');
  return (dispatch) => {
    dispatch(getLocation())
      console.log('call geolocation');
        navigator.geolocation.getCurrentPosition(function(pos){
          dispatch(gotLocation(pos));
        }, function (e) {
          console.warn(e);
          dispatch(getLocationFailed(e));
        });
      }
}
