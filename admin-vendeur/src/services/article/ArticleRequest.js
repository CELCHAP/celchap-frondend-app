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

export const getArticlesListe = async () => {
  return await axios.get(BASE_URL("api/produit/index"), {});
};

export const saveNewArticle = async (values) => {
  return await axios.post(BASE_URL("api/produit/store"), values);
};

export const updateArticle = async (values) => {
  return await axios.post(BASE_URL("api/produit/update"), values);
};

export const removeArticle = async (articleId) => {
  return await axios.post(BASE_URL("api/produit/destroy"), { id: articleId });
};

export const filtreArticleParName = async (articleName) => {
  return await axios.get(BASE_URL(`api/produit/index?name=${articleName}`), {});
};

export const filtreArticleParCategorie = async (categorieId) => {
  return await axios.get(BASE_URL(`api/produit/index?categorie=${categorieId}`), {});
};

export const filtreArticleParNom = async (search) => {
  return await axios.get(BASE_URL(`api/produit/index?filter=${search}`), {});
};
