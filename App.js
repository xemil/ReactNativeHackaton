import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
import AppContainer from './app/containers/AppContainer'

const store = configureStore({});

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      //Provider wrapps our app in redux
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
