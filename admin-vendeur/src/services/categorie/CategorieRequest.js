import { BASE_URL } from "../BaseUrl";
import axios from "axios";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Authorization = null;
  }

  return config;
});

export const getCategories = async () => {
  return await axios.get(BASE_URL("api/categorie/index"), {});
};

export const getSousCategories = async () => {
  return await axios.get(BASE_URL("api/sous_categorie/index"), {});
};
