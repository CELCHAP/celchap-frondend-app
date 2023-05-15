<script setup>
import {ref} from "vue"
import DetailHeading from "./detailHeading.vue";

</script>

<template>
 <div class="flex flex-col divide-y-[1px] w-11/12 m-auto gap-4">
            <div class="flex flex-col  m-auto pt-4 gap-4">
               <div class="flex flex-col mt-4">
                  <span class="text-2xl font-bold">17.400 Fcfa</span>
                  <span class="text-xs opacity-80"> Minimum ( 1 )   produit(s) pour valider la commande.  </span>
                  <span class="text-sm font-medium mt-1"
                     >Chausure de femme a ventre</span
                  >
               </div>

               <article class="text-xs ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore, quis amet hic itaque obcaecati vel quibusdam!
                  Provident totam modi alias ut quas nisi similique molestiae
                  dignissimos cumque, tempora ipsam quam, veritatis excepturi.
               </article>

               <span class="text-xs font-bold opacity-80">0 Commandes</span>
            </div>

            <div class="flex flex-col pt-4">
                <DetailHeading titile="Info sur le produit" />
              

               <div class="text-xs">
                  <span class="font-semibold "> Code du produit:</span>
                  <span> C50Gt</span>
               </div>
            </div>

            
            <!-- Details de l'achats -->
          
         </div>

</template>

<style >
body{
  overflow-x: hidden !important;
}
</style>
