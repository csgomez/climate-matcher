import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
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
  guesses: 0,
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
    pushHistory: (state) => {
      const moveNumber = state.history.length + 1;
      const firstCity = state[1].data;
      const secondCity = state[2].data;

      // have to go from number->string->number thanks to javascript
      const difference = parseFloat(
        Math.abs(firstCity.temp - secondCity.temp).toFixed(1)
      );

      state.history.push({ moveNumber, firstCity, secondCity, difference });
    },
    increaseGuessCount: (state) => {
      state.guesses += 1;
    },
  },
});

export const {
  updateFirstCity,
  updateSecondCity,
  updateCity,
  pushHistory,
  increaseGuessCount,
} = citiesSlice.actions;

export const selectAllCities = (state) => state.cities;
const selectFirstCity = (state) => state.cities[1];
const selectSecondCity = (state) => state.cities[2];

export const selectCityDataById = (cityId) =>
  createSelector([selectAllCities], (cities) => cities[cityId].data);

export const selectIsFirstCityReady = createSelector(
  [selectFirstCity],
  (firstCity) => firstCity.ready
);

export const selectAreBothCitiesReady = createSelector(
  [selectFirstCity, selectSecondCity],
  (firstCity, secondCity) => firstCity.ready && secondCity.ready
);

// export const selectHistory = (state) => state.cities.history;
export const selectHistory = createSelector(
  [selectAllCities],
  (cities) => cities.history
);

// If both cities now have their weather ready, then a formal "Guess" is made
// and a new history item should be added
export const updateCityAndCheckReady = createAsyncThunk(
  'cities/updateCityAndCheckReady',
  async ({ cityId, newCityData }, { getState, dispatch }) => {
    dispatch(updateCity({ cityId, newCityData }));

    const state = getState();

    if (state.cities[1].ready && state.cities[2].ready) {
      dispatch(pushHistory());
      dispatch(increaseGuessCount());
    }
  }
);

export const selectGuesses = (state) => state.cities.guesses;

export default citiesSlice.reducer;
