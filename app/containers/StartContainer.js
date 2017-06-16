import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentPosition } from '../actions/location';
import fetchMyData from '../actions/mydata';
import types from '../actions/types';
import Start from '../components/Start';


function mapDispatchToProps (dispatch) {
  return {
    fetchMyData: () => dispatch(fetchMyData()),
    getCurrentPosition: (name) => dispatch(getCurrentPosition(name))
  }
}

function mapStateToProps (state) {
  return {
    locationData: state.locationReducer.data,
    name: state.name
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
