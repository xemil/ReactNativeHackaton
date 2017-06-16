import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
import StartContainer from './app/containers/StartContainer';
import rootReducer from './app/reducers/index';

//INSERT ROOT REDUCER HERE
// http://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html
const store = configureStore(rootReducer);

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      //Provider wrapps our app in redux
      <Provider store={store}>
        <View style={styles.container}>
          <StartContainer />
        </View>
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
