import { createSlice } from '@reduxjs/toolkit';
import { IReduxCartProduct } from '../types';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: state => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: state => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutStart } =
  userSlice.actions;
export default userSlice.reducer;
