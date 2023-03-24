<template>
  <GridLayout>
    <div class="w-full px-6 pt-10 md:pt-6">
      <h1 class="text-2xl md:text-3xl text-black font-bold">Gestion des commandes</h1>
      <p class="text-gray-500 text-sm sm:text-base mt-3">Visualisez toutes les commandes reçues par votre boutique</p>

      <!-- Filtre de recherche -->
      <div class="mt-10 flex items-center justify-between gap-x-5">
        <div class="dropdown block sm:hidden">
          <label tabindex="0">
            <button
              class="w-24 h-9 bg-sky-200 flex items-center justify-center gap-x-3 rounded-md text-gray-700 font-extrabold shadow-sm">
              <vue-feather size="18" stroke-width="2.1" type="filter"></vue-feather>
              <span class="text-xs sm:text-sm">Filtres</span>
            </button>
          </label>
          <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-64 mt-2 border">
            <input type="text" placeholder="Rechercher..."
              class="w-58 h-11 text-sm font-medium input input-bordered w-full max-w-xs" v-model="searchTerm" />
            <select class="select-custom-height select select-bordered w-58 max-w-xs font-medium mt-2"
              v-model="categorieSelected">
              <option value="" disabled selected>Choisir une catégorie</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>

        <div class="hidden sm:flex items-center gap-x-3">
          <input type="text" placeholder="Rechercher..."
            class="w-58 h-11 font-medium input input-bordered w-full max-w-xs" v-model="searchTerm" />

          <select class="select-custom-height select select-bordered w-58 max-w-xs font-medium"
            v-model="categorieSelected">
            <option value="" disabled selected>Choisir une catégorie</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <!-- <div>
          <button class="bg-custom-orange w-32 sm:w-36 h-10 text-white text-xs sm:text-sm font-bold rounded-md shadow-sm"
            @click="() => openModalEditArticle('')">Ajouter un article</button>
        </div> -->
      </div>


      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra w-full border">
          <thead class="bg-black">
            <tr>
              <th class="bg-black text-custom-jaune"></th>
              <th class="bg-black text-xs sm:text-sm text-custom-jaune">Nom client</th>
              <th class="bg-black text-xs sm:text-sm text-custom-jaune">Téléphone</th>
              <th class="bg-black text-xs sm:text-sm text-custom-jaune">Articles</th>
              <th class="bg-black text-xs sm:text-sm text-custom-jaune">Quantité</th>
              <th class="bg-black text-xs sm:text-sm text-custom-jaune">Date de livraison</th>
              <th class="bg-black text-xs sm:text-sm text-custom-jaune">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!isLoading && listeCommandes.length > 0" v-for="(item, index) in listeCommandes" :key="index">
              <th class="text-black">{{ index + 1 }}</th>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.nom }}</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.categorie }}</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.prix }} FCFA</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.quantiteStock }}</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">
                <div class="flex items-center gap-x-3">
                  <router-link :to="'/articles/detail/' + index">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="18" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                  </router-link>
                  <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md"
                    @click="() => openModalEditArticle(item)">
                    <vue-feather size="18" stroke-width="2.1" type="edit-2"></vue-feather>
                  </button>
                  <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md"
                    @click="() => alertDelete(index)">
                    <vue-feather size="18" stroke-width="2.1" type="trash-2"></vue-feather>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="!isLoading && listeCommandes.length === 0">
              <td colspan="7">
                <div class="w-full h-32 text-red-500 flex items-center justify-center gap-x-2">
                  <vue-feather size="20" stroke-width="2.1" type="alert-circle"></vue-feather>
                  <p class="text-red-500 text-sm sm:text-base md:text-lg font-semibold">Aucune commande trouvée.</p>
                </div>
              </td>
            </tr>
            <tr v-if="isLoading && listeCommandes.length === 0">
              <td colspan="7">
                <div class="w-full h-32 text-red-500 flex flex-col items-center justify-center gap-x-2">
                  <ProgressSpinner v-if="isLoading" style="width:25px;height:25px" strokeWidth="5" fill="none"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                  <p class="text-gray-600 text-sm sm:text-base md:text-lg font-semibold">chargement...</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <!-- Modal de suppression de commande -->
    <input type="checkbox" id="modal-delete" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <div class="flex flex-col items-center text-red-500">
          <vue-feather size="25" stroke-width="2.1" type="alert-triangle"></vue-feather>
          <h3 class="font-bold text-lg text-center text-red-500">Supprimer cette commande</h3>
        </div>
        <p class="py-4 text-center text-sm sm:text-base font-medium">Cette commande sera supprimé de votre liste et ne
          pourra plus être récupérée</p>

        <div class="modal-action justify-center">

          <button :disabled="isLoadingDelete" class="btn text-sm capitalize"
            @click="() => alertDelete('')">Annuler</button>

          <button :disabled="isLoadingDelete"
            class="btn-delete bg-red-500 flex items-center justify-center text-white text-sm font-semibold capitalize w-28 rounded-md"
            @click="deleteCommande">
            <ProgressSpinner v-if="isLoadingDelete" style="width:25px;height:25px" strokeWidth="5" fill="none"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            <span v-if="!isLoadingDelete">Supprimer</span>
          </button>
        </div>
      </div>
    </div>
  </GridLayout>
</template>

<script setup>
import { ref } from 'vue'
import GridLayout from '../../layouts/GridLayout.vue';
import ProgressSpinner from 'primevue/progressspinner';

const listeCommandes = ref([])
const searchTerm = ref("")
const categorieSelected = ref("")
const commandeToDelete = ref("")
const isLoading = ref(false)
const isLoadingDelete = ref(false)

const alertDelete = (commandeId) => {
  commandeToDelete.value = commandeId ? commandeId : ''
  document.getElementById('modal-delete').click()
}

const deleteCommande = () => {
  isLoadingDelete.value = true

  setTimeout(() => {
    isLoadingDelete.value = false
    document.getElementById('modal-delete').click()
  }, 3000);
}
</script>

<style scoped></style>