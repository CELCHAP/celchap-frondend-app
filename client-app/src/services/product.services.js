import {ref} from "vue"
import axios from 'axios';

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

   return {
      Products,
      ProductsNew,
      getAllProduits,
      getAllProduitsNew,
   };
};
