<script setup>
import { ref, reactive } from 'vue';
import DetailHeading from './detailHeading.vue';

const sellers = reactive([
   {
      name: 'Livraison',
      icon: 'fi fi-sr-',
      info: 'Votre colis sera envoyer a votre adresse de livraison.',
   },
   {
      name: 'Mode de paiements',
      icon: 'fi fi-sr-',
      info: 'Paimments en espéce a la livraison.',
   },
]);

defineProps({
   boutique: String
})

</script>

<template>
   <div class="flex flex-col pt-4 gap-4 w-full divide-y-[1px]">
      <div class="flex flex-col m-auto w-11/12 gap-4">
         <DetailHeading titile="Details de l'achats" titile-sub="" />

         <div v-for="seller in sellers">
            <div class="flex flex-col gap-1">
               <div class="flex">
                  <i></i>
                  <span class="text-sm font-semibold"> {{ seller.name }} </span>
               </div>

               <div class="flex">
                  <span class="text-xs"> {{ seller.info }} </span>
               </div>
            </div>
         </div>
      </div>

      <!--  -->
      <div class="flex flex-col m-auto w-11/12 gap-4 pt-8">
         <DetailHeading
            titile="Temps Livraison"
            titile-sub="Dès la validations de la commande par le fournisseur."
         />

         <div class="text-sm font-medium flex gap-2 items-center">
            <i
               class="fi fi-sr-arrow-left flex transform rotate-45"
            ></i>
            <span>3 jours</span>
         </div>
      </div>

      <div class="w-11/12 m-auto my-4 pt-4">
         <DetailHeading
            titile="Detail du vendeur"
            titile-sub=""
         />

         <div class="flex gap-4 items-center w-full " v-if="boutique">
         

            <div class="flex  gap-2 w-full items-center">

               <div class="w-8 h-8  bg-gray-100 rounded-full">
               <img class="w-full h-full" v-lazy="boutique.media[0]?.original_url"  alt="" />
            </div>
               
               <div class="flex gap-2 w-6/12">
                  <span class="text-lg font-medium"> {{ boutique.name }} </span>
               </div>

               

            </div>

            <div class="text-xs">
                  <RouterLink :to="{name: StoreView, params: boutique.id }" class="bg-orange-500 p-3 rounded-full text-white font-bold gap-1 flex items-center">
                     <i class="fi fi-sr-shop flex text-base" ></i>
                     <span>Visiter</span>
                  </RouterLink>
               </div>
         </div>
      </div>
   </div>
</template>

<style>
body {
   overflow-x: hidden !important;
}
</style>
