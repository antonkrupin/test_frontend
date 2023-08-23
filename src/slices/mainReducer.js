import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false,
  isModalOpen: false,
  error: null,
}

const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
		setModalOpen: (state, action) => {
			state.isModalOpen = !state.isModalOpen;
		},
	}
});

export const {
  setModalOpen,
} = slice.actions;

export default slice.reducer;