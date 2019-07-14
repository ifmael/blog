import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './index';

const createStore = () => reduxCreateStore(rootReducer);
const myStore = createStore();

myStore.subscribe( event => {
  console.log(`updated state`);
}) 

export default ({ element }) => {
  return <Provider store={myStore}>{element}</Provider>
};