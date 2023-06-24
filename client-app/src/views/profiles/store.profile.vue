<script setup>
import { reactive, onMounted, ref } from 'vue';
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import required modules
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css/pagination';
import { getAllStore, getStore } from '../../services/store.services';
import CardManager from '../../components/cards/card.manager.vue';
const modules = [Autoplay, Pagination];

const AddProducts = reactive([
   {
      name: 'Produit',
      icon: 'fi fi-sr-store-alt',
      color: 'bg-purple-50',
      color_strong: 'text-purple-400',
      link: '/store/produit/simple',
   },
   {
      name: 'En Gros',
      icon: 'fi fi-sr-boxes',
      color: 'bg-blue-50',
      color_strong: 'text-blue-400',
      link: '',
   },
   {
      name: 'FLash',
      icon: 'fi fi-sr-bolt',
      color: 'bg-orange-50',
      color_strong: 'text-orange-400',
      link: '',
   },
   {
      name: 'Promo (%)',
      icon: 'fi fi-sr-megaphone',
      color: 'bg-cyan-50',
      color_strong: 'text-cyan-400',
      link: '',
   },
   {
      name: 'Code Promo',
      icon: 'fi fi-sr-badge-percent',
      color: 'bg-yellow-50',
      color_strong: 'text-yellow-400',
      link: '',
   },
]);

const StoreManagements = reactive([
   {
      name: 'Mes Produits',
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
   // {
   //    name: 'Mes Promotions',
   //    icon: 'fi fi-sr-megaphone',
   //    color: 'bg-cyan-100',
   //    count: '0 Promotions',
   // },
   // {
   //    name: 'Mes Code Promos',
   //    icon: 'fi fi-sr-badge-percent',
   //    color: 'bg-yellow-100',
   //    count: '3 Code promos',
   // },
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
const isUserExists = ref(false);
const isUserExistToken = ref(false);
const dataStore = ref()
const getStore__o = async (getData) => {
   await getStore(getData).then(({ data, error }) => {
      if (error) {
        
      }
      if (data) {
         dataStore.value = data.boutique[0]
         StoreManagements[0].count = `${dataStore.value.produits.length} Produis`
         StoreManagements[1].count = `${dataStore.value.commandes.length} Commandes`
         

      }
   });
};

onMounted(() => {

   
   if(window.localStorage.getItem('Store')){
      const storeID = JSON.parse(window.localStorage.getItem('Store'))
      getStore__o(storeID.id)
   }
   
   if (
      window.localStorage.getItem('Store') &&
      window.localStorage.getItem('access_token')
   ) {
      isUserExists.value = true;
   }

   if (window.localStorage.getItem('access_token')) {
      isUserExistToken.value = true;
   }
});
</script>
<template>
   <!--  -->

   <HeaderNavigation />

   <!--  -->
   <section
      v-if="!isUserExists"
      class="h-[90vh] flex flex-col justify-center items-center"
   >
      <div class="flex flex-col gap-4 w-10/12 m-auto">
         <span class="text-2xl font-bold"
            >Vous avez besion de vendre vos produits plus rapidement...</span
         >
         <span class=""
            >Creez dès maintenant une boutique sur likidons afin d'ecouler votre
            stock de marchandise.</span
         >
         <a
            :href="isUserExistToken ? '/sign-store' : '/sign-up'"
            class="bg-orange-500 px-4 py-2 rounded-md text-white font-bold text-base"
            >Créez..</a
         >
      </div>
   </section>

   <!--  -->
   <section
      class="flex flex-col w-11/12 m-auto my-20 gap-8"
      v-if="isUserExists && dataStore"
   >
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
                  <span class="font-thin opacity-80">  {{ dataStore.user.fullname.length > 15 ? dataStore.user.fullname.substring(0, 15) + '...' : dataStore.user.fullname  }} </span>
               </div>
               <div class="flex items-center gap-2 text-thin text-orange-400">
                  <i class="fi fi-sr-shop flex"></i>
                  <span class="font-bold underline underline-offset-2"
                     > {{ dataStore?.name }} </span
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
                  <a
                     :href="AddProduct.link"
                     class="flex flex-col gap-1 justify-center items-center"
                  >
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
                  </a>
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


            <CardManager :managers="StoreManagements" />

            
              
            
         </div>
      </div>
   </section>

   <FooterNavigation />
</template>
<style scoped></style>
