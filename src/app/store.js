import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../reducers/citiesSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

export default store;
