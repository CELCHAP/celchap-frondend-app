import axios from "axios";

export const setAuth = () => {
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          config.headers.Authorization = null;
        }
      
        return config;
      });
}