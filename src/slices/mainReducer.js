import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false,
  isModalOpen: false,
  error: null,
  authorizedUser: [],
  users: [],
}

const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
		setModalOpen: (state, action) => {
			state.isModalOpen = !state.isModalOpen;
		},
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setAuthorizedUser: (state, action) => {
      state.authorizedUser = [...action.payload];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsAuthorized: (state, action) => {
      state.isAuthorized = !state.isAuthorized;
    },
	}
});

export const {
  setModalOpen,
  setUsers,
  setAuthorizedUser,
  setError,
  setIsAuthorized,
} = slice.actions;

export default slice.reducer;