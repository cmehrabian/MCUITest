import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { initialState } from './reducers';

const middleware = [thunk];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  middleware.push(devToolsExtension());
}

const enhancers = applyMiddleware(...middleware);

const store = createStore(
  rootReducer,
  initialState,
  enhancers
);

export default store;
