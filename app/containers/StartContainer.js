import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { ActionCreators } from '../actions';

import { getCurrentPosition } from '../actions/location';
import fetchMyData from '../actions/mydata';
import types from '../actions/types';
import Start from '../components/Start';


function mapDispatchToProps (dispatch) {
  return {
    fetchMyData: () => dispatch(fetchMyData()),
    getCurrentPosition: () => dispatch(getCurrentPosition())
  }
}

function mapStateToProps (state) {
  return {
    locationData: state.locationData,
    name: state.name
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(start);
