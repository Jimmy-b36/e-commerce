import {
  loginStart,
  loginFailure,
  loginSuccess,
  logoutStart,
} from './userRedux';
import { apiRequest } from '../helpers/requestMethods';
import { Dispatch } from '@reduxjs/toolkit';
export const login = async (dispatch: Dispatch, user: any) => {
  dispatch(loginStart());
  try {
    const res = await apiRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch: Dispatch) => {
  try {
    dispatch(logoutStart());
  } catch (err: any) {
    console.log(`dispatch error could not logout: ${err.message}`);
  }
};
