<template>
  <div class="mt-3">
    <!-- <h1 class="text-2xl md:text-3xl text-black font-bold">A propos de la boutique</h1> -->

    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-5">
      <div class="flex items-start gap-x-5">
        <div class="bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 text-black rounded-md flex items-center justify-center">
          <vue-feather size="30" stroke-width="2.1" type="image"></vue-feather>
        </div>
        <div>
          <p class="text-xs sm:text-sm text-gray-400 font-semibold">Nom de la boutique:</p>
          <h2 class="text-xl sm:text-2xl md:text-3xl text-custom-orange font-extrabold">Naham Tech & Co</h2>
          <p class="text-xs sm:text-sm text-gray-400 font-semibold mt-3">Date de création:</p>
          <h2 class="text-sm sm:text-base font-bold">12/03/2023</h2>
        </div>
      </div>
      <div class="mt-5">
        <button class="bg-emerald-300 text-sm text-black font-semibold w-fit h-9 px-3 rounded-md">Modifier les
          informations</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped></style>