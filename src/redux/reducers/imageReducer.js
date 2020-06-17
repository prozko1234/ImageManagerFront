import * as types from "../../constants/actionTypes";

export default function imageReducer(
  state = { images: [], error: {} },
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
