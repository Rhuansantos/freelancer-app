import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import nav from '../actions/index';

const AppReducer = combineReducers({
  nav
});

export default AppReducer;
