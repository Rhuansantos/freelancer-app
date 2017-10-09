import { createStore } from 'redux';
import AppReducer from '../reducers/index';

store = createStore(AppReducer); // creating store

export default store;