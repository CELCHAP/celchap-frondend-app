<script setup>
import BackBarLayout from '../../../layouts/backBar.layout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
// Import Swiper styles
import 'swiper/css';

import DetailButtonActions from '../../../components/products/detailButtonActions.vue';
import DetailInfoSeller from '../../../components/products/detailInfoSeller.vue';
import DetailOnProducts from '../../../components/products/detailInfoOnProducts.vue';

const shoes = [
   'https://picsum.photos/200/300?random=1',
   'https://picsum.photos/200/300?random=2',
   'https://picsum.photos/200/300?random=3',
   'https://picsum.photos/200/300?random=4',
   'https://picsum.photos/200/300?random=5',
   'https://picsum.photos/200/300?random=6',
   'https://picsum.photos/200/300?random=7',
   'https://picsum.photos/200/300?random=8',
   'https://picsum.photos/200/300?random=9',
   'https://picsum.photos/200/300?random=10',
];


const onSwiper = (swiper) => {
   
};
const onSlideChange = (swiper) => {

};

</script>
<template>
   <BackBarLayout :name="'Details'" />

   <div class="m-auto pt-20 pb-24">
      <div class="">
         <div class="flex flex-col w-full rounded-b-[2em] gap-2">
            <swiper
               class="w-full flex"
               :slides-per-view="1"
               :space-between="1"
               navigation
    :pagination="{ clickable: true }"
               @swiper="onSwiper"
               @slideChange="onSlideChange"
            >
               <swiper-slide v-for="product in shoes">
                  <div class="h-[45vh] bg-gray-500/20">
                     <img
                        class="w-full h-full object-cover"
                        :src="product"
                        alt=""
                     />
                  </div>
               </swiper-slide>
            </swiper>

            <div class="flex overflow-scroll ml-[2%] gap-0 w-[98%] relative">
               <swiper
                  class="w-full flex"
                  :slides-per-view="4.8"
                  :space-between="0"
               >
                  <swiper-slide v-for="(product, index) in shoes">
                     <div
                        class="w-[70px] h-[70px] rounded-md bg-gray-100"
                       
                     >
                        Img {{ image }}
                     </div>
                  </swiper-slide>
               </swiper>
            </div>
         </div>

         <div class="flex flex-col divide-y-[1px] gap-8">
            <!-- Information sur le produit -->

            <DetailOnProducts />

            <!-- Details sur l'achats -->
            <DetailInfoSeller />
         </div>

         <DetailButtonActions />
      </div>
   </div>
</template>
<style scoped></style>
