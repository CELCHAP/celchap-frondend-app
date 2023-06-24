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
import { getAllStore } from '../../../services/store.services';
import CardStore from '../../../components/cards/stores/card.store.vue';

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
   getAllStore__o();
});

const App_ads = reactive([
   {
      media: 'https://ci.jumia.is/cms/00---JA23/A-PRK/CI_W24_S_GEN_JA_LIVE_SBD_PERNOD-RICARD.jpg',
      name: ''
   },
   {
      media: 'https://ci.jumia.is/cms/00---JA23/00-S/Update/CI_W24_S_GEN_JA_LRM.gif',
      name: ''
   },{
      media: 'https://ci.jumia.is/cms/00---JA23/00-TB/CI_W20_TB_GEN_GA.gif',
      name: ''
   }
])

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

const DataAllSotre = ref();
const getAllStore__o = async () => {
   await getAllStore().then(({ data, error }) => {
      if (error) {
        
      }
      if (data) {
         DataAllSotre.value = data.boutique;
      }
   });
};
</script>
<template>
   <HeaderNavigation />

   <section class="pt-20 w-[90%] m-auto flex flex-col gap-6">
      <!-- Barre de recherche! -->
      <div
         class="bg-gray-100 border-[0px] rounded-lg px-4 gap-1 flex justify-between items-center w-full"
      >
         
         <input
            type="search"
            placeholder="Rechercher un produit..."
            class="py-3 outline-none bg-transparent"
         />
         <i class="ri-search-fill flex opacity-20"></i>
      </div>

      <div
         class="flex flex-col gap-4"
         v-if="Categories && Categories.length > 0"
      >
         <!-- Section Pub -->

         <!-- Section populaire -->
         <!-- <HeadingRedirect name="Categorie(s)" redirect="/category" /> -->
         <swiper class="w-full flex" :slides-per-view="3.8" :space-between="10">
            <swiper-slide v-for="categorie in Categories" v-if="categorie?.media.length !=0">
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
         <swiper-slide v-for="ads in App_ads">
            <img
               v-lazy="ads?.media"
               class="w-full h-40 object-cover rounded-md"
               alt=""
            />
         </swiper-slide>
      </swiper>

      <!-- All Store -->
      <div
         class="flex flex-col gap-4"
         v-if="DataAllSotre && DataAllSotre.length > 0"
      >
         <!-- Section Pub -->

         <!-- Section populaire -->
         <HeadingRedirect name="Nos Boutiques" redirect="/store/all" />
         <swiper class="w-full flex" :slides-per-view="2.5" :space-between="10">
            <swiper-slide v-for="store in DataAllSotre">
             <CardStore :image="store.media[0]?.original_url" :name="store.name" :id="store.code" />
            </swiper-slide>
         </swiper>
      </div>

      <!-- Juste selectionner pour vous -->
      <div class="flex flex-col gap-4 pb-24">
         <!-- Section populaire -->
         <HeadingRedirect name="Juste pour vous" redirect="/produit/all" />

         <div class="grid grid-cols-2 gap-3" v-if="Products">
            <div v-for="product in Products.slice(0, 10)">
               <PorductsCardAll
                  :id="product.id"
                  :code="product.code"
                  :title="product.name"
                  :price="product.prices[0]?.prix_afficher + 'Fcfa'"
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
