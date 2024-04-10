// store.js
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export default store;

// import { createStore } from "redux";
// import allReducers from "./reducers/indexReduce";

// const store = createStore(
//     allReducers,
// );
// store.getState();
// export default store;


// import { configureStore } from '@reduxjs/toolkit'
  
// export const store = configureStore({ 
//     reducer: {}, 
// })


