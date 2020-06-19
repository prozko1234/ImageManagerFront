import * as types from "../../constants/actionTypes";
import initialState from "./initialState";

export default function imageReducer(
  state = initialState.imageReducer,
  action
) {
  switch (action.type) {
    case types.IMAGES_GET_SUCCESS:
      return { ...state, images: action.images };
    case types.IMAGES_GET_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
