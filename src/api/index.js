import axios from 'axios';
import {
  host
} from "@/api/config.js"
import {
  cookie
} from "@/utils/cookie.js"
export function Login(data) {
  return axios({
    url: host() + "/login",
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data)
  })
}
export function FindUserInfo() {
  axios.defaults.headers.common['Access-Token'] = cookie().getCookie("token");
  return axios({
    url: host() + "/index/find/user",
    method: "get"
  })
}
export function SaveInfo(data) {
  return axios({
    url: host() + "/index/save",
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data)
  })
}
export function UpdateStatus() {
  return axios({
    url: host() + "/index/update_status",
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
