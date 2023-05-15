<script setup>
import HeaderNavigation from '../../../navigations/header.navigation.vue';
import FooterNavigation from '../../../navigations/footer.navigation.vue';
import ProductsCardCategorie from '../../../components/cards/products/productsCardCategorie.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css/pagination';

import { ref } from 'vue';

import HeadingRedirect from '../../../components/heading/headingRedirect.vue';
import PorductsCardAll from '../../../components/cards/products/porductsCardAll.vue';
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { URL } from './../../../router/url';

const modules = [Autoplay, Pagination];

const Categories = ref();
const Products = ref();
const ProductsNew = ref();
const ImageTonpon =
   'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmV0ZW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
onMounted(() => {
   getAllCategories();
   getAllProduits();
   getAllProduitsNew();
});

// Obtenir tous les categories
const getAllCategories = async () => {
   try {
      const { data } = await axios.get(URL.CATEGORY);
      if (data) {
         Categories.value = data.categorie;
         console.log(data.categorie);
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
</script>
<template>
   <HeaderNavigation />

   <section class="pt-20 w-[90%] m-auto flex flex-col gap-6">
      <!-- Barre de recherche! -->
      <div
         class="bg-gray-100 border-[0px] rounded-lg px-4 gap-1 flex justify-center items-center w-full"
      >
         <i class="fi fi-sr-search flex opacity-20"></i>
         <input
            type="search"
            placeholder="Rechercher un produit..."
            class="bg-white py-3 outline-none bg-transparent"
         />
      </div>

      <div
         class="flex flex-col gap-4"
         v-if="Categories && Categories.length > 0"
      >
         <!-- Section Pub -->

         <!-- Section populaire -->
         <!-- <HeadingRedirect name="Categorie(s)" redirect="/category" /> -->
         <swiper class="w-full flex" :slides-per-view="3.8" :space-between="10">
            <swiper-slide v-for="categorie in Categories">
               <ProductsCardCategorie
                  :name="categorie.name"
                  :image="categorie?.media[0]?.original_url"
               />
            </swiper-slide>
         </swiper>
      </div>

      <swiper
         class="w-full flex"
         :slides-per-view="1.1"
         :space-between="10"
         navigation
         :pagination="{ dynamicBullets: true }"
         :modules="modules"
      >
         <swiper-slide v-for="categorie in Categories">
            <img
               v-lazy="categorie?.media[0]?.original_url"
               class="w-full h-40 object-cover rounded-md"
               alt=""
            />
         </swiper-slide>
      </swiper>


      <!-- All Store -->
      <div
         class="flex flex-col gap-4"
         v-if="Categories && Categories.length > 0"
      >
         <!-- Section Pub -->

         <!-- Section populaire -->
         <HeadingRedirect name="Nos Boutiques" redirect="/category" />
         <swiper class="w-full flex" :slides-per-view="2.5" :space-between="10">
            <swiper-slide v-for="categorie in Categories">
               <div class="bg-gray-100 relative flex rounded-lg w-full border-[1px] border-purple-500">
                  <div class="h-[130px]">
                     <img v-lazy="categorie?.media[0]?.original_url" alt="" class="w-full h-full object-cover rounded-lg"/>
                  </div>
                  
                  <div class="absolute z-20 left-0 bottom-0  w-full">
                     <span class="py-1 px-2 text text-sm text-white bg-purple-500/80 w-full flex font-bold justify-center rounded-b-lg" >Ori Boutique</span>
                  </div>

               </div>
            </swiper-slide>
         </swiper>
      </div>

      <!-- Juste selectionner pour vous -->
      <div class="flex flex-col gap-2 pb-24">
         <!-- Section populaire -->
         <HeadingRedirect name="Juste pour vous" />

         <div class="grid grid-cols-2 gap-3">
            <div v-for="product in Products">
               <PorductsCardAll
                  :title="product.name"
                  :price="product.montant_ajouter + 'Fcfa'"
                  :img="
                     product?.media.length === 0
                        ? ImageTonpon
                        : product?.media[0]?.original_url
                  "
               />
            </div>
         </div>
      </div>
   </section>

   <FooterNavigation />
</template>
<style scoped></style>
