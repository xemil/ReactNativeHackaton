import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
//import { ActionCreators } from '../actions';

import { getCurrentPosition } from '../actions/location';
import fetchMyData from '../actions/mydata';
import types from '../actions/types';

const AppContainer = (props, state) => {
    return (
        <View>
            <Text>
              Scania TrackMe
            </Text>
            <TextInput
placeholder="Enter name"
onTextChanged={ (newValue) => this.setState(name)}>
</TextInput>
            <Button onPress={() => props.getCurrentPosition(state.name)} title='Start' />
            {/*<Text>{props.locationData.data.coords.longitude}, {props.locationData.data.coords.latitude}</Text>*/}
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
