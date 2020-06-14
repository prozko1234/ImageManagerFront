import * as types from "../../constants/actionTypes";
import { getToken } from "../../api/apiCalls";

export const loginUser = (login, password) => {
  return (dispatch) => {
    return getToken(login, password)
      .then((user) => {
        localStorage.setItem("token", user.access_token);
        dispatch(loginUserSuccess(user));
      })
      .catch((error) => {
        dispatch(loginUserFailure("Login error."));
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
