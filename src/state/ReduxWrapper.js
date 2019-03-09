import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

const createStore = () => reduxCreateStore(rootReducer);
const myStore = createStore();

myStore.subscribe( event => {
  debugger;
  console.log(`updated state`);
}) 

export default ({ element }) => (
  <Provider store={myStore}>{element}</Provider>
);