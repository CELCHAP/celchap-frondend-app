<script setup>
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css/pagination';

import { ref } from 'vue';
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { URL } from './../../router/url';
import { getAllStore } from '../../services/store.services';
import HeadingRedirect from '../../components/heading/headingRedirect.vue';
import CardManager from '../../components/cards/card.manager.vue';

const modules = [Autoplay, Pagination];

const Categories = ref();
const Products = ref();
const ProductsNew = ref();
const ImageTonpon =
   'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmV0ZW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
onMounted(() => {
   
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

const DeliveryManagements = reactive([
   {
      name: 'Livraison Standard',
      icon: 'fi fi-sr-store-alt',
      color: 'bg-purple-100',
      count: '8h-18h',
   },
   {
      name: 'Livraison Express',
      icon: 'fi fi-sr-truck-loading',
      color: 'bg-blue-100',
      count: 'Livraison directe après collecte ',
   },
   {
      name: 'Mon Livreur',
      icon: 'fi fi-sr-store-alt',
      color: 'bg-orange-100',
      count: 'Livreur à disposition 8h-18h',
   },
   {
      name: 'Mes Commandes',
      icon: 'fi fi-sr-truck-loading',
      color: 'bg-emerald-100',
      count: '12 Commandes',
   },
])


</script>
<template>
   <HeaderNavigation />

   <section class="pt-20 w-[90%] m-auto flex flex-col gap-6">


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


      <div class="flex flex-col gap-4">


        <HeadingRedirect name="Commandez votre transport" />


        <div class="flex flex-col gap-2">
            <CardManager :managers="DeliveryManagements" />
        </div>

      </div>

     
   </section>

   <FooterNavigation />
</template>
<style scoped></style>
