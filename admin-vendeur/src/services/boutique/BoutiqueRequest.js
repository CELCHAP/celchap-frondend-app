import { BASE_URL } from "../BaseUrl"
import axios from "axios"

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access")
  if (token) {
    config.headers.Authorization =  `Bearer ${token}`;
  } else {
    config.headers.Authorization =  null;
  }

  return config;
});

export const listUserStore = async () => {
    return await axios.get(BASE_URL("api/boutique/index"), {})
}

export const createNewUserStore = async (values) => {
    return await axios.post(BASE_URL("api/boutique/store"), values)
}

export const updateUserStore = async (values) => {
    return await axios.post(BASE_URL("api/boutique/update"), values)
}

export const deleteUserStore = async (values) => {
    return await axios.post(BASE_URL("api/boutique/destroy"), values)
}