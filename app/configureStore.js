
import reducerRoot from './reducers';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  predicte: (getState, action) => __DEV__
});

export default function configureStore(intitalState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return createStore(reducerRoot, intitalState, enhancer);
}
