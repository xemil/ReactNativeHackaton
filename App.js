import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// import AppContainer from '../app/container/appcontainer'

const loggerMiddleware = createLogger({
  predicte: (getState, action) => __DEV__
});

function configureStore(intitalState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  var reducer = () => { };

  return createStore(reducer, intitalState, enhancer);
}

const store = configureStore({});

const Application = () => {
  <Provider store={store}>
    <AppContainer />
  </Provider>
}
export default class App extends React.Component {
  render() {
    return (
      //Provider wrapps our app in redux
      <Provider store={store}>
        {/*<AppContainer />*/}
        <Text>Hello</Text>
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
