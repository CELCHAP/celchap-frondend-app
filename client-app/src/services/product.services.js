import {ref} from "vue"
import axios from 'axios';
import { URL } from "../router/url";

export const ProductServices = () => {
   const Products = ref();
   const ProductsNew = ref();

   // Obtenir tous les produits
   const getAllProduits = async () => {
      try {
         const { data } = await axios.get(URL.PRODUCTS);
         if (data) {
            Products.value = data.produit;
         }
      } catch (error) {
         console.log(error);
      }
   };

   // Obtenir tous les nouveau produit
   const getAllProduitsNew = async () => {
      try {
         const { data } = await axios.get(URL.PRODUCTS_NEW);
         if (data) {
            ProductsNew.value = data.produit;
         }
      } catch (error) {
         console.log(error);
      }
   };


   const searchInProduct = (e) => {
      Products.value = ProductsCaches.value.filter((produit) => {
        return produit.name
           .toLocaleLowerCase()
           .includes(e.target.value.toLocaleLowerCase());
     });
  };


   

   return {
      Products,
      ProductsNew,
      getAllProduits,
      getAllProduitsNew,
      searchInProduct
   };
};


export const CreateProduitSimple= async (simple) => {
   try {
      const { data } = await axios.post(URL.PRODUCTS_STORE_SIMPLE, simple);
      if (data) {
         return {
            data: data,
            error: null,
         };
      }
   } catch (error) {
      return {
         data: null,
         error: {
            path: Object.keys(error.response.data.errors)[0],
            message: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0]
         },
      };
   }
};