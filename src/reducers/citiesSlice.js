import { createSlice } from '@reduxjs/toolkit';
import { getInitialCity } from '../utils';

const initialState = {
  firstCity: getInitialCity(),
  secondCity: getInitialCity(),
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    updateFirstCity: (state, action) => {
      state.firstCity = action.payload;
    },
    updateSecondCity: (state, action) => {
      state.secondCity = action.payload;
    },
  },
});

export const { updateFirstCity, updateSecondCity } = citiesSlice.actions;

export const selectAllCities = (state) => state.cities;
export const selectFirstCity = (state) => state.cities.firstCity;
export const selectSecondCity = (state) => state.cities.secondCity;

export const getCitySelectorById = (id) => {
  if (id === 1) return selectFirstCity;
  if (id === 2) return selectSecondCity;
};

export default citiesSlice.reducer;
