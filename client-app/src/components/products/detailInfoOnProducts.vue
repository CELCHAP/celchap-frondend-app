<script setup>
import { ref } from 'vue';
import DetailHeading from './detailHeading.vue';

defineProps({
   product: Object,
   Nb_cmd: String
});
</script>

<template>
   <div class="flex flex-col divide-y-[1px] w-11/12 m-auto gap-4">
      <div class="flex flex-col w-full m-auto pt-4 gap-4">
         <div class="flex flex-col mt-4">
            <span class="text-2xl font-bold">
               {{ product.prices[0].prix_afficher }} F CFA</span
            >
            <span class="text-xs opacity-80">
               Minimum ( {{ product.prices[0].q_min }} ) produit(s) pour valider
               la commande.
            </span>
            <span class="text-sm font-medium mt-1"> {{ product.name }} </span>
         </div>

         <article class="text-xs">
            {{ product.description }}
         </article>

         <span class="text-xs font-bold opacity-80"> {{ Nb_cmd }}  Commandes</span>
      </div>

      <div class="flex flex-col pt-4">
         <DetailHeading titile="Info sur le produit" />

         <div class="text-xs flex gap-2">
            <span class="font-semibold"> Code du produit:</span>
            <span class=""> {{ product.code }} </span>
         </div>
      </div>

      <!-- Details de l'achats -->
   </div>
</template>

<style>
body {
   overflow-x: hidden !important;
}
</style>
