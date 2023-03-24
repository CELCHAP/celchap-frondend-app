<script setup>
import BackBarLayout from '../../../layouts/backBar.layout.vue';
</script>
<template>
   <BackBarLayout :name="'Details'" />

   <div class="m-auto mt-12">
      <div class="">
         <div class="bg-gray-500/20 h-[50vh] w-full rounded-b-[2em]">0</div>

         <div class="flex flex-col w-11/12 m-auto mt-4">
            <span class="text-lg">Chausure de femme a ventre</span>
            <span class="text-lg font-bold">17.400 Fcfa</span>
         </div>

         <div class="w-11/12 m-auto pt-4 pb-16">
            <article>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Tempore, quis amet hic itaque obcaecati vel quibusdam! Provident
               totam modi alias ut quas nisi similique molestiae dignissimos
               cumque, tempora ipsam quam, veritatis excepturi eligendi et
               placeat incidunt mollitia nihil aperiam magnam.
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Tempore, quis amet hic itaque obcaecati vel quibusdam! Provident
               totam modi alias ut quas nisi similique molestiae dignissimos
               cumque, tempora ipsam quam, veritatis excepturi eligendi et
               placeat incidunt mollitia nihil aperiam magnam.
            </article>
         </div>

         <div class="flex w-full fixed bottom-0">
            <button class="bg-orange-400 w-full py-2 text-sm font-bold text-white">Ajouter au panier</button>
         </div>
      </div>
   </div>
</template>
<style scoped></style>
