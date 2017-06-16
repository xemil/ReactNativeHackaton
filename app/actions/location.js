import { GETTING_LOCATION, GOT_LOCATION_FAILED, GOT_LOCATION_SUCCESS } from '../constants';

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

// export function postPoistion(position, id){
//       try {
//         let response = await fetch('https://wi15x59ehl.execute-api.eu-west-1.amazonaws.com/dev/todos/', {
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             id: id,
//             position: position
//           })
//         })

//         let responseJson = await response.json();
//         return responseJson.movies;
//       } catch (error) {
//         console.error(error);
//       }
// }

export function getCurrentPosition(id) {
  console.log('getCurrentPosition');
  return (dispatch) => {
    dispatch(getLocation())
    console.log('call geolocation');
    navigator.geolocation.getCurrentPosition(function (pos) {
      
      //POSTING DATA
      fetch('https://wi15x59ehl.execute-api.eu-west-1.amazonaws.com/dev/todos/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 'firstTime',
          lat: '33',
          lng: '44'
        })
      });
      console.log('k;r post');
      dispatch(gotLocation(pos));
    }, function (e) {
      console.warn(e);
      dispatch(getLocationFailed(e));
    });
  }
}