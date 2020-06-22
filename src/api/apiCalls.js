import { handleResponse, handleError } from "./apiResponse";

const path = "https://localhost:44331/";

export function getToken(login, password) {
  return fetch(path + `token?username=${login}&password=${password}`, {
    method: "POST",
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getImages() {
  return fetch(path + `api/image/getAllImages`, {
    method: "GET",
  })
    .then(handleResponse)
    .catch(handleError);
}

export function authentificate(token) {
  return fetch(path + `authentication`, {
    methode: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getUserImages(token) {
  return fetch(path + `api/image/getAllUserImages`, {
    methode: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getImagesByTag(tag) {
  return fetch(path + `api/image/getImagesByTag?tag=${tag}`, {
    methode: "GET",
  })
    .then(handleResponse)
    .catch(handleError);
}

export function writeImage(token, file) {
  return fetch(path + `api/image/writeImage`, {
    methode: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: file,
  })
    .then(handleResponse)
    .catch(handleError);
}
