import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../reducers/citiesSlice';
import modalReducer from '../reducers/modalSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    modal: modalReducer,
  },
});

export default store;
