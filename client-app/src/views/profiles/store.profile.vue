<script setup>
import { reactive, onMounted, ref } from 'vue';
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import required modules
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css/pagination';
const modules = [Autoplay, Pagination];

const AddProducts = reactive([
   {
      name: 'Produit',
      icon: 'fi fi-sr-store-alt',
      color: 'bg-purple-50',
      color_strong: 'text-purple-400',
   },
   {
      name: 'En Gros',
      icon: 'fi fi-sr-boxes',
      color: 'bg-blue-50',
      color_strong: 'text-blue-400',
   },
   {
      name: 'FLash',
      icon: 'fi fi-sr-bolt',
      color: 'bg-orange-50',
      color_strong: 'text-orange-400',
   },
   {
      name: 'Promo (%)',
      icon: 'fi fi-sr-megaphone',
      color: 'bg-cyan-50',
      color_strong: 'text-cyan-400',
   },
   {
      name: 'Code Promo',
      icon: 'fi fi-sr-badge-percent',
      color: 'bg-yellow-50',
      color_strong: 'text-yellow-400',
   },
]);

const StoreManagements = reactive([
   {
      name: 'Mes articles',
      icon: 'fi fi-sr-store-alt',
      color: 'bg-purple-100',
      count: '5 Articles ',
   },
   {
      name: 'Mes Commandes',
      icon: 'fi fi-sr-truck-loading',
      color: 'bg-emerald-100',
      count: '12 Commandes',
   },
   {
      name: 'Mes Promotions',
      icon: 'fi fi-sr-megaphone',
      color: 'bg-cyan-100',
      count: '0 Promotions',
   },
   {
      name: 'Mes Code Promos',
      icon: 'fi fi-sr-badge-percent',
      color: 'bg-yellow-100',
      count: '3 Code promos',
   },
]);

const StoreAmounts = reactive([
   {
      title: "Chiffre d'affaires (Ce Mois-ci)",
      description:
         "Ce montant est votre chiffre d'affaire de vos ventes du mois current.",
      icon: '',
      amount: '450.000',
   },
   {
      title: "Chiffre d'affaires (Global)",
      description:
         "Ce montant est votre chiffre d'affaire de ventes, depuis votre arrivée sur CelChap.",
      icon: '',
      amount: '1.450.000',
   },
   {
      title: 'Montant Reçu',
      description:
         "C'est le montant des ventes, que vous avez reçu par Celchap sur votre Chiffre d'affaires (Global).",
      icon: '',
      amount: '1.350.000',
   },
   {
      title: 'Montant credit',
      description:
         "C'est le montant des ventes, impayées par Celchap sur votre Chiffre d'affaires (Global).",
      icon: '',
      amount: '150.000',
   },
]);
</script>
<template>
   <!--  -->

   <section class="fixed inset-0 h-14 bg-white z-40 w-full shadow-sm">
      <div class="flex justify-between items-center w-11/12 m-auto h-full">
         <div class="">
            <i class="fi fi-sr-bars-sort flex"></i>
         </div>

         <div class="">
            <span>CELCHAP.</span>
         </div>

         <div class="">
            <i></i>
         </div>
      </div>
   </section>

   <!--  -->
   <section class="flex flex-col w-11/12 m-auto my-20 gap-8">
      <div class="fixed h-screen w-screen inset-0 bg-gray-50 -z-40"></div>

      <!--  -->

      <div class="flex flex-col gap-4">
         <!-- Chiffre d'affaire -->
         <div
            class="flex flex-col gap-4 divide-y-[1px] p-4 bg-white rounded-md"
         >
            <div class="flex flex-col">
               <div class="flex text-xl gap-1">
                  <span class="font-thin">Hello,</span>
                  <span class="font-thin opacity-80"> Ange Emmanuel</span>
               </div>
               <div class="flex items-center gap-2 text-thin text-orange-400">
                  <i class="fi fi-sr-shop flex"></i>
                  <span class="font-bold underline underline-offset-2"
                     >Likidons</span
                  >
               </div>
            </div>
         </div>

         <div class="flex w-full">
            <swiper
               :slides-per-view="1.1"
               :space-between="10"
               navigation
               :pagination="{ dynamicBullets: true }"
               :modules="modules"
            >
               <swiper-slide v-for="StoreAmount in StoreAmounts">
                  <div
                     class="flex flex-col pt-4 w-full bg-white px-4 py-8 rounded-md"
                  >
                     <span class="text-thin opacity-50 font-semibold">
                        {{ StoreAmount.title }}
                     </span>
                     <div class="flex gap-2 items-center">
                        <i class="fi fi-sr-wallet flex text-gray-200"></i>
                        <span class="text-xl font-black opacity-70">
                           {{ StoreAmount.amount }} F CFA
                        </span>
                     </div>
                     <span class="flex text-[10px] mt-2">
                        {{ StoreAmount.description }}
                     </span>
                  </div>
               </swiper-slide>
            </swiper>
         </div>
      </div>

      <!-- Ajout de produits -->
      <div class="flex flex-col gap-2">
         <span>Ajouter des produits</span>

         <div
            class="flex justify-between items-center bg-white rounded-md py-4 w-full"
         >
            <swiper :slides-per-view="3.5" :space-between="1" navigation>
               <swiper-slide v-for="AddProduct in AddProducts">
                  <div class="flex flex-col gap-1 justify-center items-center">
                     <div
                        class="w-16 h-16 rounded-full flex justify-center items-center"
                        :class="AddProduct.color"
                     >
                        <i
                           class="flex text-xl"
                           :class="[AddProduct.icon, AddProduct.color_strong]"
                        ></i>
                     </div>
                     <span class="font-bold text-xs">
                        {{ AddProduct.name }}
                     </span>
                  </div>
               </swiper-slide></swiper
            >
         </div>

         <div class="flex w-full">
            <swiper
               :loop="true"
               :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
               }"
               :slides-per-view="1.1"
               :space-between="10"
               navigation
               :modules="modules"
            >
               <swiper-slide v-for="StoreAmount in StoreAmounts">
                  <div
                     class="flex flex-col w-full bg-white px-4 h-28 justify-center rounded-md"
                  >
                     <div class="flex gap-2 items-center">
                        <i class="fi fi-sr-wallet flex text-gray-200"></i>
                        <span class="text-xl font-black opacity-70">
                           {{ StoreAmount.amount }} F CFA
                        </span>
                     </div>
                     <span class="flex text-[10px] mt-2">
                        {{ StoreAmount.description }}
                     </span>
                  </div>
               </swiper-slide>
            </swiper>
         </div>
      </div>

      <!-- Gere la boutique -->
      <div class="flex flex-col gap-2">
         <span>Gerer votre boutique</span>

         <div class="flex flex-col gap-2">
            <div
               class="flex justify-between items-center gap-2 px-2 py-3 rounded-md"
               :class="StoreManagement.color"
               v-for="StoreManagement in StoreManagements"
            >
               <div
                  class="w-12 h-12 rounded-full flex justify-center items-center"
               >
                  <i class="flex text-xl" :class="StoreManagement.icon"></i>
               </div>

               <div class="flex flex-col w-9/12">
                  <span class="text-thin font-bold">
                     {{ StoreManagement.name }}
                  </span>
                  <span class="text-xs">{{ StoreManagement.count }}</span>
               </div>

               <div
                  class="w-8 h-8 text-xs bg-white flex rounded-full items-center justify-center"
               >
                  <i class="fi fi-sr-angle-right flex"></i>
               </div>
            </div>
         </div>
      </div>
   </section>
   <FooterNavigation />
</template>
<style scoped></style>
