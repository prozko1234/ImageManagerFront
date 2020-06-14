import * as types from "../../constants/actionTypes";
import initialState from "./initialState";

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, user: action.user };
    case types.LOGIN_USER_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
