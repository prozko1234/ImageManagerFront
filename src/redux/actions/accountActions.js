import * as types from "../../constants/actionTypes";
import { getToken, authentificate } from "../../api/apiCalls";

export const loginUser = (login, password) => {
  return (dispatch) => {
    return getToken(login, password)
      .then((user) => {
        localStorage.setItem("token", user.access_token);
        dispatch(loginUserSuccess(user));
      })
      .catch((error) => {
        dispatch(loginUserFailure(error));
        throw error;
      });
  };
};

export const loginUserSuccess = (user) => {
  return { type: types.LOGIN_USER_SUCCESS, user };
};

export const loginUserFailure = (error) => {
  return { type: types.LOGIN_USER_FAILURE, error };
};

export const getUserAuth = (token) => {
  return (dispatch) => {
    return authentificate(token)
      .then((user) => {
        dispatch(authUserSuccess(user));
      })
      .catch((error) => {
        dispatch(authUserFailures(error));
      });
  };
};

export const authUserSuccess = (user) => {
  return { type: types.GET_AUTH_INFO_SUCCESS, user };
};

export const authUserFailures = (error) => {
  return { type: types.GET_AUTH_INFO_FAILURE, error };
};
