// import { handleResponse, handleError } from "./apiResponse";

// const path = "https://localhost:44331/";

// export function getToken(login, password) {
//   return fetch(path + `token`, {
//     method: "POST",
//     body: JSON.stringify({ username: login, password: password }),
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

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
