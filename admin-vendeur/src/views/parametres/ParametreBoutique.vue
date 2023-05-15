<template>
  <div class="mt-3">
    <!-- <h1 class="text-2xl text-black text-center font-bold">A propos de la boutique</h1> -->

    <div class="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-x-5">
      <div class="flex items-start gap-x-5">
        <div class="bg-gray-200 w-24 h-24 sm:w-32 sm:h-32 text-black rounded-md flex items-center justify-center">
          <vue-feather v-if="boutiqueDetail.media.length === 0" size="30" stroke-width="2.1" type="image"></vue-feather>
          <img v-if="boutiqueDetail.media.length !== 0" :src="boutiqueDetail.media[0].original_url" alt="" class="object-cover w-full">
        </div>
        <div>
          <p class="text-xs sm:text-sm text-gray-400 font-medium">Nom de la boutique:</p>
          <h2 class="text-xl sm:text-2xl md:text-3xl text-orange-500 font-black">{{ boutiqueDetail.name }}</h2>
          <p class="text-xs sm:text-sm text-gray-400 font-medium mt-3">Date de création:</p>
          <h2 class="text-sm sm:text-base text-gray-800 font-bold">{{ formatDate(boutiqueDetail.created_at) }}</h2>
        </div>
      </div>
      <div class="mt-5 w-full sm:w-fit">
        <button
          class="bg-black text-sm text-custom-jaune font-bold w-full sm:w-fit h-fit py-1.5 px-3 shadow-lg rounded-md"
          @click="openModalEditBoutique">
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
            class="font-bold text-xs text-black bg-green-200 py-1 px-1.5 rounded-md">{{ boutiqueDetail.indicatif }} {{
              boutiqueDetail.phone }}</span></p>
        <p class="text-base text-gray-500 font-bold mt-4">
          Description de la boutique : <span class="font-medium text-black">
            {{ boutiqueDetail.description }}
          </span>
        </p>
        <!-- <p class="text-base text-gray-500 font-bold mt-4">
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
        </div> -->
      </div>
    </div>


    <!-- Modal ajout ou modification de boutique -->
    <input type="checkbox" id="edit-boutique" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-xl">
        <h3 class="font-extrabold text-xl text-custom-orange">Modifier les informations</h3>
        <div class="modal-ajout-article mt-5">
          <EditBoutique :boutiqueInfo="boutiqueDetail" :categorie="listeCategorie" @reloadEvent="handleReloadData" />
        </div>
      </div>
    </div>


    <teleport to="body">
      <vue3-snackbar bottom :duration="4000" dense shadow></vue3-snackbar>
    </teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EditBoutique from './EditBoutique.vue';
import { getCategories } from '../../services/categorie/CategorieRequest';
import { listUserStore } from '../../services/boutique/BoutiqueRequest';

const boutiqueDetail = ref({})
const listeCategorie = ref([])

onMounted(() => {
  // Récupère des infos de la boutique
  listUserStore().then(res => {
    boutiqueDetail.value = res.data.boutique[0]
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible de récupérer les informations',
      dismissible: true,
      background: "#ef4444"
    })
  })


  // Récupère la liste des catégories
  getCategories().then(res => {
    listeCategorie.value = res.data.categorie
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible de récupérer les catégories',
      dismissible: true,
      background: "#ef4444"
    })
  })
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  return date.toLocaleDateString('fr-FR', options)
}

const openModalEditBoutique = (item) => {
  document.getElementById('edit-boutique').click()
}

const handleReloadData = () => {
  // Récupère des infos de la boutique
  listUserStore().then(res => {
    boutiqueDetail.value = res.data.boutique[0]
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible de récupérer les informations',
      dismissible: true,
      background: "#ef4444"
    })
  })
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