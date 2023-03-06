<template>
  <div class="mt-3">
    <!-- <h1 class="text-2xl text-black text-center font-bold">A propos de la boutique</h1> -->

    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-5">
      <div class="flex items-start gap-x-5">
        <div class="bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 text-black rounded-md flex items-center justify-center">
          <vue-feather size="30" stroke-width="2.1" type="image"></vue-feather>
        </div>
        <div>
          <p class="text-xs sm:text-sm text-gray-400 font-medium">Nom de la boutique:</p>
          <h2 class="text-xl sm:text-2xl md:text-3xl text-orange-500 font-black">Naham Tech & Compagnie</h2>
          <p class="text-xs sm:text-sm text-gray-400 font-medium mt-3">Date de création:</p>
          <h2 class="text-sm sm:text-base text-gray-800 font-bold">12/03/2023</h2>
        </div>
      </div>
      <div class="mt-5 w-full sm:w-fit">
        <button
          class="bg-black text-sm text-custom-jaune font-bold w-full sm:w-fit h-9 px-3 shadow-lg rounded-md" @click="openModalEditBoutique">
          Modifier les informations
        </button>
      </div>
    </div>

    <div class="flex items-start gap-x-5">
      <div
        class="hidden sm:block sm:invisible bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 text-black rounded-md flex items-center justify-center">
        <vue-feather size="30" stroke-width="2.1" type="image"></vue-feather>
      </div>
      <div class="w-full sm:w-2/3 mt-7 sm:mt-3">
        <p class="text-base text-gray-500 font-bold">Catégorie de la boutique : <span
            class="font-bold text-xs text-black bg-custom-jaune py-1 px-1.5 rounded-md">Appareil informatique</span></p>
        <p class="text-base text-gray-500 font-bold mt-4">Contact de la boutique : <span
            class="font-bold text-xs text-black bg-green-200 py-1 px-1.5 rounded-md">+225 0778812111</span></p>
        <p class="text-base text-gray-500 font-bold mt-4">
          Description de la boutique : <span class="font-medium text-black">
            Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Repellendus
            praesentium animi ipsa reprehenderit commodi rem! Iure quidem, modi libero, adipisci perferendis cum
            praesentium necessitatibus illo molestias provident suscipit aperiam. Ut?
          </span>
        </p>
        <p class="text-base text-gray-500 font-bold mt-4">
          Réseaux sociaux :
        </p>
        <div class="mt-3 w-full">
          <div class="flex items-center gap-x-1 font-semibold text-gray-500">
            <vue-feather size="20" stroke-width="2.1" type="facebook"></vue-feather>
            Facebook : <a href="http://twitter.com/dams9ix" target="_blank" rel="noopener noreferrer"
              class="underline font-semibold text-sm text-black">http://facebook.com/dams9ix</a>
          </div>
          <div class="flex items-center gap-x-1.5 font-semibold text-gray-500 mt-3">
            <vue-feather size="20" stroke-width="2.1" type="instagram"></vue-feather>
            Instagram : <a href="http://twitter.com/dams9ix" target="_blank" rel="noopener noreferrer"
              class="underline text-black font-semibold text-sm">http://instagram.com/dams9ix</a>
          </div>
          <div class="flex items-center gap-x-1 font-semibold text-gray-500 mt-3">
            <vue-feather size="20" stroke-width="2.1" type="twitter"></vue-feather>
            Twitter : <a href="http://twitter.com/dams9ix" target="_blank" rel="noopener noreferrer"
              class="underline text-black font-semibold text-sm">http://twitter.com/dams9ix</a>
          </div>
        </div>
      </div>
    </div>


    <!-- Modal ajout ou modification de boutique -->
    <input type="checkbox" id="edit-boutique" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-xl">
        <h3 class="font-extrabold text-xl text-black text-">Modifier les informations</h3>
        <div class="modal-ajout-article mt-5">
          <EditBoutique :boutiqueInfo="boutiqueDetail" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditBoutique from './EditBoutique.vue';

const boutiqueDetail = ref({})

const openModalEditBoutique = (item) => {
  document.getElementById('edit-boutique').click()
}
</script>

<style>
@keyframes p-progress-spinner-color {

  100%,
  0% {
    stroke: #000;
  }

  40% {
    stroke: #000;
  }

  66% {
    stroke: #000;
  }

  80%,
  90% {
    stroke: #000;
  }
}
</style>