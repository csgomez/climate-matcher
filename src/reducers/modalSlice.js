import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {
    isOpen: false,
  },
  gameEnding: {
    isOpen: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showSettingsModal: (state) => {
      state.settings.isOpen = true;
    },
    hideSettingsModal: (state) => {
      state.settings.isOpen = false;
    },
    showGameEndingModal: (state) => {
      state.gameEnding.isOpen = true;
    },
    hideGameEndingModal: (state) => {
      state.gameEnding.isOpen = false;
    },
  },
});

export const {
  showSettingsModal,
  hideSettingsModal,
  showGameEndingModal,
  hideGameEndingModal,
} = modalSlice.actions;

export const selectIsSettingsModalOpen = (state) => state.modal.settings.isOpen;
export const selectIsGameEndingModalOpen = (state) =>
  state.modal.gameEnding.isOpen;

export default modalSlice.reducer;
