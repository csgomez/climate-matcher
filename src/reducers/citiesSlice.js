import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getInitialCity } from '../utils';

const initialState = {
  1: {
    data: getInitialCity(),
    ready: false,
  },
  2: {
    data: getInitialCity(),
    ready: false,
  },
  history: [],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    updateCity: (state, action) => {
      const { cityId, newCityData } = action.payload;
      state[cityId].data = newCityData;
      state[cityId].ready = true;
    },
    pushHistory: (state, action) => {
      const { city1, city2, difference } = action.payload;
      const moveNumber = state.length + 1;

      state.push({ moveNumber, city1, city2, difference });
    },
  },
});

export const { updateFirstCity, updateSecondCity, updateCity } =
  citiesSlice.actions;

export const selectAllCities = (state) => state.cities;
export const selectFirstCity = (state) => state.cities[1];
export const selectSecondCity = (state) => state.cities[2];

export const getCitySelectorById = (id) => {
  if (id === 1) return selectFirstCity;
  if (id === 2) return selectSecondCity;
};

// export const selectCityDataById = (state, cityId) => state.cities[cityId].data;
export const selectCityDataById = (cityId) =>
  createSelector([selectAllCities], (cities) => cities[cityId].data);

export const selectIsFirstCityReady = createSelector(
  [selectFirstCity],
  (firstCity) => firstCity.ready
);

export const selectFirstCityStatus = (state) => state.cities[1].ready;

export const selectAreBothCitiesReady = createSelector(
  [selectFirstCity, selectSecondCity],
  (firstCity, secondCity) => firstCity.ready && secondCity.ready
);

export default citiesSlice.reducer;
