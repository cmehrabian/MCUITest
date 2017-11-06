import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { initialState } from './reducers';

const preloadedState = window.__PRELOADED_STATE__ || {};

const enhancers = [];
const middleware = [thunk];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
