export function getCurrentPosition() {
  return (dispatch, getState) => {
      navigator.geolocation.getCurrentPosition(function(pos){
        dispatch({pos: pos});
      }, function (e) {
        console.warn(e);
      });
  }
}
