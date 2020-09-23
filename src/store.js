// store.js
import { createStore } from 'redux';
// TODO: Import middleware
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
