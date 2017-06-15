import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
//import { ActionCreators } from '../actions';
import { getCurrentPosition } from '../actions/location';
import { changeTextInput } from '../actions/changeTextInput'
import fetchMyData from '../actions/mydata';
import types from '../actions/types';

const AppContainer = (props, state) => {
  var { height } = Dimensions.get('window');

  var box_count = 3;
  var box_height = height / box_count;
  const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      flexDirection: 'column'
    },
    box: {
      height: box_height
    },
    box1: {
      backgroundColor: '#2196F3'
    },
    box2: {
      backgroundColor: '#8BC34A'
    },
    box3: {
      backgroundColor: '#e3aa1a'
    }
  });


  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.box1]}>
        Scania TrackMe
            </Text>
      <TextInput style={[styles.box, styles.box2]}
        placeholder="Enter name"
        onChangeText={(newValue) => {
          console.log('text change is triggerd:')
          console.log(newValue)
          console.log(state);
          //STORE IS THE FIRST STEP IN DATA FLOW
          {/*http://redux.js.org/docs/basics/DataFlow.html*/}
          store.dispatch({
            type: 'CHANGE_TEXTINPUT',
            textInput: newValue
          });
        }}>
      </TextInput>
      <Button style={[styles.box, styles.box1]} title='Start' onPress={() => {
        console.log('props:')
        console.log(props)
        console.log('state:')
        console.log(state.name);
        props.getCurrentPosition(state.name)
      }} />
      {/*<Text>{props.locationData.data.coords.longitude}, {props.locationData.data.coords.latitude}</Text>*/}

    </View>);
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMyData: () => dispatch(fetchMyData()),
    getCurrentPosition: () => dispatch(getCurrentPosition())
  }
}

function mapStateToProps(state) {
  return {
    locationData: state.locationData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);


