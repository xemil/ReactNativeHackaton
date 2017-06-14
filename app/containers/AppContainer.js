import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
//import { ActionCreators } from '../actions';

import { getCurrentPosition } from '../actions/location';
import fetchMyData from '../actions/mydata';
import types from '../actions/types';

const AppContainer = (props) => {
    return (
        <View>
            <Text>
              Scania TrackMe
            </Text>
            <Button onPress={() => props.getCurrentPosition()} title='Start' />
            <Text>props.locationData</Text>
        </View>
    );
}

function mapDispatchToProps (dispatch) {
  return {
    fetchMyData: () => dispatch(fetchMyData()),
    getCurrentPosition: () => dispatch(getCurrentPosition())
  }
}

function mapStateToProps (state) {
  return {
    locationData: state.locationData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
