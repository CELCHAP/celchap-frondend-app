<script setup>
import HeaderNavigation from '../../../navigations/header.navigation.vue';
import FooterNavigation from '../../../navigations/footer.navigation.vue';
import ProductsCardCategorie from '../../../components/cards/products/productsCardCategorie.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

// Import Swiper styles
import 'swiper/css';
import HeadingRedirect from '../../../components/heading/headingRedirect.vue';
import PorductsCardAll from '../../../components/cards/products/porductsCardAll.vue';
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { URL } from './../../../router/url';



const Categories = ref()
const Products = ref()
const ProductsNew = ref()
const ImageTonpon = 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmV0ZW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
onMounted(() => {
   getAllCategories();
   getAllProduits();
   getAllProduitsNew()
});

// Obtenir tous les categories
const getAllCategories = async () => {
   try {
      const { data } = await axios.get(URL.CATEGORY);
      if(data){
         Categories.value = data.categorie
         console.log(data.categorie)
      }
      console.log(data);
   } catch (error) {
      console.log(error);
   }
};

// Obtenir tous les produits
const getAllProduits = async () => {
   try {
      const { data } = await axios.get(URL.PRODUCTS);
      if(data){
         Products.value = data.produit
      }
   } catch (error) {
      console.log(error);
   }
};


// Obtenir tous les nouveau produit
const getAllProduitsNew = async () => {
   try {
      const { data } = await axios.get(URL.PRODUCTS_NEW);
      if(data){
         ProductsNew.value = data.produit
      }
   } catch (error) {
      console.log(error);
   }
};


</script>
<template>
   <HeaderNavigation />

   <section class="pt-28 w-11/12 m-auto flex flex-col gap-8">
      <div class="flex flex-col gap-4">
         <!-- Section Pub -->

         <!-- Section populaire -->
         <HeadingRedirect name="Categorie(s)" redirect="/category" />

         <swiper class="w-full flex" :slides-per-view="3.1" :space-between="10">
            <swiper-slide v-for="categorie in Categories">
               <ProductsCardCategorie
                  :name="categorie.name"
                  :img="categorie?.media[0]?.original_url"
               />
            </swiper-slide>
         </swiper>
      </div>

      <!-- Nouveaute -->
      <div class="flex flex-col gap-4">
         <!-- Section Pub -->

         <HeadingRedirect name="Nouveautés(s)" />

         <swiper class="w-full flex" :slides-per-view="2.3" :space-between="10">
            <swiper-slide v-for="product in ProductsNew">
               <PorductsCardAll
                  :price="product.montant_ajouter+ 'Fcfa'"
                  :img="product?.media.length === 0 ? ImageTonpon : product?.media[0]?.original_url"
               />
            </swiper-slide>
         </swiper>
      </div>

      <!-- Juste selectionner pour vous -->
      <div class="flex flex-col gap-2 pb-24">
         <!-- Section populaire -->
         <HeadingRedirect name="Juste pour vous" />

         <div class="grid grid-cols-2 gap-2">
            <div v-for="product in Products">
               <PorductsCardAll
                  :title="product.name"
                  :price="product.montant_ajouter+ 'Fcfa'"
                  :img="product?.media.length === 0 ? ImageTonpon : product?.media[0]?.original_url"
               />
            </div>
         </div>
      </div>
   </section>

   <FooterNavigation />
</template>
<style scoped></style>
