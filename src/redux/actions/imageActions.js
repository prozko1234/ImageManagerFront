import * as types from "../../constants/actionTypes";
import { getImages } from "../../api/apiCalls";

export const getAllImages = () => {
  return (dispatch) => {
    return getImages()
      .then((images) => {
        dispatch(imagesGetSuccess(images));
      })
      .catch((error) => {
        dispatch(imagesGetFailure("Login error."));
        throw error;
      });
  };
};

export const imagesGetSuccess = (images) => {
  return { type: types.IMAGES_GET_SUCCESS, images };
};

export const imagesGetFailure = (error) => {
  return { type: types.IMAGES_GET_FAILURE, error };
};
