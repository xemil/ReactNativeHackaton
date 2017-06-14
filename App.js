import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducerRoot from './app/reducers';
import { getCurrentPosition } from './app/actions/location';
import fetchMyData from './app/actions/mydata';
import types from './app/actions/types';
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

  return createStore(reducerRoot, intitalState, enhancer);
}

const store = configureStore({});

const Application = () => {
  <Provider store={store}>
    <AppContainer />
  </Provider>
}

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log('hämtar datan');
     //props.getCurrentPosition();
  }

  render() {
    return (
      //Provider wrapps our app in redux
      <Provider store={store}>
        {/*<AppContainer />*/}
        <View>
        <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
