import * as types from "../../constants/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState, action) {
  switch (action) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.userData.access_token,
        user: { username: action.userData.username },
      };
    case types.LOGIN_USER_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
