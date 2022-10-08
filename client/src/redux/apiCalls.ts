import { loginStart, loginFailure, loginSuccess } from './userRedux';
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
