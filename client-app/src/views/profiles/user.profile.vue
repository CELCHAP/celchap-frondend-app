<script setup>
import { reactive, onMounted, ref } from 'vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import HeaderNavigation from '../../navigations/header.navigation.vue';

const ProfileActivity = reactive([
   {
      name: 'Commande(s)',
      count: 3,
   },
   {
      name: 'Vues',
      count: 12,
   },
   {
      name: 'Favorie(s)',
      count: 0,
   },
]);
</script>
<template>
   <HeaderNavigation />
   <div class="fixed h-screen w-screen inset-0 bg-gray-50 z-[-1000000]"></div>

   <section class="flex flex-col my-20 w-full gap-8 ">
      <!-- Profile User Image -->
      <div class="flex flex-col gap-1 w-full items-center bg-white py-8">
         <div class="w-32 h-32 bg-gray-200 rounded-full">
            <img src="" alt="" />
         </div>

         <div class="flex flex-col gap-1 items-center">
            <span class="text-2xl font-bold">Ange Emmanuel</span>
            <span class="text-sm">Vendeur sur Celchap</span>
         </div>

         <div class="flex justify-between gap-8 mt-4 hidden">
            <div class="" v-for="profileActivity in ProfileActivity">
               <div
                  class="flex flex-col justify-center items-center gap-1 text-base"
               >
                  <span class="font-bold text-2xl"> {{ profileActivity.count }} </span>
                  <span class="font-bold text-sm"> {{ profileActivity.name }} </span>
               </div>
            </div>
         </div>
      </div>

      <div class=" w-11/12 m-auto flex flex-col gap-2">
         <div class="">
            <span>Mes Commandes ( 6 )</span>
         </div>

         <div class="flex flex-col gap-2 w-full">
            <div class="flex gap-2 justify-between items-center bg-white px-2 py-3 rounded-md" v-for="items in 6">
               <div class="w-16 h-16 bg-slate-300 rounded-md">
                  <img src="" alt="" />
               </div>

               <div class="flex flex-col gap-1">
                  <span class="text-sm">Sacs gouttih de chez zara</span>
                  <button class="flex text-xs items-center gap-1" > 
                     <span class="bg-green-400 flex font-bold text-white p-1 rounded-lg">En attente</span>
                     <span class="text-xs"> Par Okiha Boutique</span>
                  </button>
                  
               </div>

               <i class="fi fi-sr-menu-dots-vertical"></i>
            </div>
         </div>
      </div>
   </section>
   <FooterNavigation />
</template>
<style scoped></style>
