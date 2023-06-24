<script setup>
import BackBarLayout from '../../../layouts/backBar.layout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import { onMounted, ref } from 'vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Autoplay, Pagination];

import DetailButtonActions from '../../../components/products/detailButtonActions.vue';
import DetailInfoSeller from '../../../components/products/detailInfoSeller.vue';
import DetailOnProducts from '../../../components/products/detailInfoOnProducts.vue';
import axios from 'axios';
import { URL } from './../../../router/url';
import { useRoute } from 'vue-router';

onMounted(() => {
   getOneProduits();
   console.log(route.params);
});
const route = useRoute();
const Product = ref();
const Nb_cmd = ref()
const getOneProduits = async () => {
   try {
      const { data } = await axios.get(
         URL.PRODUCTS_DETAIL + '?id=' + route.params?.code
      );
      if (data) {
         Nb_cmd.value = data.nb_cmd
         Product.value = data.produit;
      }
   } catch (error) {
      console.log(error);
   }
};
</script>
<template>
   <BackBarLayout :name="'Details'" />

   <div class="m-auto pt-20 pb-24" v-if="Product">
      <div class="">
         <div class="flex flex-col w-full rounded-b-[2em] gap-2">
            <swiper
               class="w-full flex"
               :slides-per-view="1"
               :space-between="1"
               navigation
               :pagination="{ dynamicBullets: true }"
               :modules="modules"
               @swiper="onSwiper"
               @slideChange="onSlideChange"
            >
               <swiper-slide v-for="media in Product.media">
                  <div class="h-[45vh] bg-gray-500/20">
                     <img
                        class="w-full h-full object-cover"
                        v-lazy="media.original_url"
                        alt=""
                     />
                  </div>
               </swiper-slide>
            </swiper>
         </div>

         <div class="flex flex-col divide-y-[1px] gap-8">
            <!-- Information sur le produit -->

            <DetailOnProducts :product="Product" :Nb_cmd="Nb_cmd" />

            <!-- Details sur l'achats -->
            <DetailInfoSeller :boutique="Product.boutique" />
         </div>

         <DetailButtonActions />
      </div>
   </div>
</template>
<style scoped></style>
