import * as types from "../../constants/actionTypes";
import { getToken } from "../../api/apiCalls";

export const loginUser = (login, password) => {
  return (dispatch) => {
    return getToken(login, password)
      .then((response) => {
        dispatch(loginUserSuccess(response));
      })
      .catch((error) => {
        dispatch(loginUserFailure(error));
      });
  };
};

export const loginUserSuccess = (userData) => {
  localStorage.setItem("token", userData.token);
  return { type: types.LOGIN_USER_SUCCESS, userData };
};

export const loginUserFailure = (error) => {
  return { type: types.LOGIN_USER_FAILURE, error };
};
