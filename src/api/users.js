import http from "../utils/http";

function login(data) {
  return http.post('/login', data)
}

export {
  login
}