import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { getInitialCity } from '../utils';
import { showGameEndingModal } from './modalSlice';

const DIFFICULTY_VALUES = { easy: 7.0, medium: 3.0, hard: 1.0 };

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
  difficulty: {
    name: 'medium',
    value: DIFFICULTY_VALUES['medium'],
  },
  game: {
    isFinished: false,
    isWinner: false,
  },
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    updateCity: (state, action) => {
      const { cityId, newCityData } = action.payload;
      state[cityId].data = newCityData;
      state[cityId].ready = true;
      console.log('UPDATED A CITY');
    },
    pushHistory: (state) => {
      const moveNumber = state.history.length + 1;
      const firstCity = state[1].data;
      const secondCity = state[2].data;

      const difference = parseFloat(
        Math.abs(firstCity.temp - secondCity.temp).toFixed(1)
      );

      state.history.push({ moveNumber, firstCity, secondCity, difference });
    },
    increaseGuessCount: (state) => {
      state.guesses += 1;
    },
    updateDifficulty: (state, action) => {
      const name = action.payload;
      const value = DIFFICULTY_VALUES[name];

      state.difficulty = { name, value };
    },
    updateGameState: (state) => {
      const difficulty = state.difficulty.value;
      const guessCount = state.guesses;
      const guesses = state.history;

      // was the last guess within the difficulty range?
      const isWinner = guesses[guesses.length - 1].difference <= difficulty;

      state.game.isWinner = isWinner;
      state.game.isFinished = isWinner || guessCount === 5;
      console.log('UPDATED THE GAME STATE');
    },
    resetGame: () => {
      return initialState;
    },
  },
});

export const {
  updateFirstCity,
  updateSecondCity,
  updateCity,
  pushHistory,
  increaseGuessCount,
  resetGame,
  updateDifficulty,
  updateGameState,
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

export const makeGuess = createAsyncThunk(
  'cities/makeGuess',
  async ({ cityId, newCityData }, { getState, dispatch }) => {
    // first, update the corresponding city
    dispatch(updateCity({ cityId, newCityData }));

    let state = getState();

    // if both cities are now set, a formal guess is made and a history item is pushed
    if (state.cities[1].ready && state.cities[2].ready) {
      dispatch(pushHistory());
      dispatch(increaseGuessCount());

      // and finally, check for game completion and winner
      dispatch(updateGameState());
    }

    state = getState();

    // if the game is finished, show the game ending modal
    if (state.cities.game.isFinished) {
      console.log('Game finished!');
      dispatch(showGameEndingModal());
    }
  }
);

export const selectGameState = (state) => state.cities.game;

export const selectGuesses = (state) => state.cities.guesses;

export const selectCurrentDifficulty = (state) => state.cities.difficulty;
export const selectCurrentDifficultyValue = (state) =>
  state.cities.difficulty.value;

export default citiesSlice.reducer;
