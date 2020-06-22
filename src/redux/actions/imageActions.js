import * as types from "../../constants/actionTypes";
import {
  getImages,
  getUserImages,
  getImagesByTag,
  writeImage,
} from "../../api/apiCalls";

export const getAllImages = () => {
  return (dispatch) => {
    return getImages()
      .then((images) => {
        dispatch(imagesGetSuccess(images));
      })
      .catch((error) => {
        dispatch(imagesGetFailure(error));
        throw error;
      });
  };
};

export const getAllUserImages = (token) => {
  return (dispatch) => {
    return getUserImages(token)
      .then((images) => {
        if (images === 401) {
          dispatch(imagesGetFailure(401));
        } else {
          dispatch(imagesGetSuccess(images));
        }
      })
      .catch((error) => {
        dispatch(imagesGetFailure(error));
        throw error;
      });
  };
};

export const findImages = (tag) => {
  return (dispatch) => {
    return getImagesByTag(tag)
      .then((images) => {
        dispatch(imagesGetSuccess(images));
      })
      .catch((error) => {
        dispatch(imagesGetFailure(error));
        throw error;
      });
  };
};

export const addImage = (token, file) => {
  return (dispatch) => {
    return writeImage(token, file)
      .then(() => {
        dispatch(getAllUserImages(token));
      })
      .catch((error) => {
        dispatch(imagesGetFailure(error));
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
