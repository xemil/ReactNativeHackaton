import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
<<<<<<< HEAD
import { getCurrentPosition } from './app/actions/location';
=======
import fetchMyData from './app/actions/mydata';
import types from './app/actions/types';
>>>>>>> f569ebf28fd23db96df29347000c92977df7f295
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
  constructor(props){
    super(props);
  }

  componentDidMount(){
    var pos = getCurrentPosition();
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

  componentDidMount() {
    const { dispatch, getState } = this.props
    console.log('hämtar datan');
     fetchMyData();
     
      // this.props.fetchRecipes().then( (res) => {
      // this.setState({searching: false })
    // }
    // );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
