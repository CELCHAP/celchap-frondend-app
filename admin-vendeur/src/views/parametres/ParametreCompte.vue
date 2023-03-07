<template>
  <div class="mt-3">
    <div class="xl:w-9/12 flex flex-col sm:flex-row items-start sm:items-start justify-between gap-x-5">
      <div class="flex items-start gap-x-5">
        <div class="bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 text-black rounded-full flex items-center justify-center">
          <vue-feather size="30" stroke-width="2.1" type="image"></vue-feather>
        </div>
        <div>
          <p class="text-xs sm:text-sm text-gray-400 font-medium">Nom et prénoms:</p>
          <h2 class="text-xl sm:text-2xl md:text-3xl text-orange-500 font-black">N'da Adams Aimé-Désiré</h2>
          <p class="text-xs sm:text-sm text-gray-400 font-medium mt-2">Date de d'inscription:</p>
          <h2 class="text-sm sm:text-base text-gray-600 font-bold">12/02/2023</h2>
          <p class="text-xs sm:text-sm text-gray-400 font-medium mt-2">Abonnement:</p>
          <span class="font-bold text-sm text-black bg-custom-jaune py-1 px-1.5 rounded-md">Premium Plus</span>
        </div>
      </div>
      <div class="mt-5 w-full sm:w-fit">
        <button
          class="flex items-center justify-center gap-x-2 bg-black text-sm text-custom-jaune font-bold w-full sm:w-fit h-fit py-1.5 px-3 shadow-lg rounded-md"
          @click="openModalEditUtilisateur">
          <!-- <vue-feather size="20" stroke-width="2.1" type="edit-3"></vue-feather> -->
          <span class="p-0">Modifier mes infos</span>
        </button>
      </div>
    </div>

    <div class="flex items-start gap-x-5 sm:mt-3">
      <div
        class="hidden sm:block sm:invisible bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 text-black rounded-md flex items-center justify-center">
        <vue-feather size="30" stroke-width="2.1" type="image"></vue-feather>
      </div>
      <div class="w-full sm:w-2/3 mt-7 sm:mt-3">
        <p class="text-base text-gray-500 font-bold">Numéro de téléphone : <span
            class="font-bold text-sm text-black">+2250778812111</span></p>
        <p class="text-base text-gray-500 font-bold mt-4">Adresse email : <span
            class="font-bold text-sm text-black">ad.aimedesire@gmail.com</span></p>
        <p class="text-base text-gray-500 font-bold mt-4">
          Lieu d'habitation : <span class="font-medium text-black">
            Cocody, Rivera Palmerai
          </span>
        </p>
      </div>
    </div>


    <!-- Modal ajout ou modification de l'utilisateur -->
    <input type="checkbox" id="edit-utilisateur" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-xl">
        <h3 class="font-extrabold text-xl text-custom-orange">Modifier mes informations</h3>
        <div class="modal-ajout-article mt-5">
          <EditUtilisateur :utilisateurInfo="utilisateurDetail" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditUtilisateur from './EditUtilisateur.vue';

const utilisateurDetail = ref({})

const openModalEditUtilisateur = (item) => {
  document.getElementById('edit-utilisateur').click()
}
</script>

<style scoped></style>