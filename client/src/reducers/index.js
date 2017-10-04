import { combineReducers } from 'redux';
import * as Search from './search';

export default combineReducers(Object.assign(
	Search,
));