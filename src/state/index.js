import { combineReducers } from 'redux';
// import state from './app';
import searchState from '../components/ifm-search/state/reducers.js'


export default combineReducers({ state: searchState });
