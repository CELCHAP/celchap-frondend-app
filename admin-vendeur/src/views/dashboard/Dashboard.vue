<template>
  <GridLayout>
    <div class="w-full px-6 pt-10 md:pt-6">
      <h1 class="text-xl sm:text-2xl md:text-3xl text-black font-bold">Bonjour N'da</h1>

      <div class="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        <div class="bg-red-100 w-full h-full border p-3 sm:p-5 rounded-md">
          <h2 class="text-sm sm:text-base text-gray-700 font-semibold">Revenu généré (FCFA)</h2>
          <p class="text-xl sm:text-2xl font-extrabold mt-2">12.340.000</p>
        </div>
        <div class="bg-indigo-100 w-full h-full border p-3 sm:p-5 rounded-md">
          <h2 class="text-sm sm:text-base text-gray-700 font-semibold">Commandes reçues</h2>
          <p class="text-xl sm:text-2xl font-extrabold mt-2">12</p>
        </div>
        <div class="bg-amber-100 w-full h-full border p-3 sm:p-5 rounded-md">
          <h2 class="text-sm sm:text-base text-gray-700 font-semibold">Nombre de client</h2>
          <p class="text-xl sm:text-2xl font-extrabold mt-2">12</p>
        </div>
        <div class="bg-sky-100 w-full h-full border p-3 sm:p-5 rounded-md">
          <h2 class="text-sm sm:text-base text-gray-700 font-semibold">Articles enregistrés</h2>
          <p class="text-xl sm:text-2xl font-extrabold mt-2">12</p>
        </div>
      </div>

      <div class="my-16">
        <div class="flex items-center justify-between">
          <h2 class="text-xl md:text-2xl text-black font-bold">Vos commandes récentes</h2>
          <button class="bg-custom-orange text-sm sm:text-base text-white font-bold w-28 sm:w-32 h-9 rounded-md">Tout
            voir</button>
        </div>

        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra w-full border">
            <thead class="bg-black">
              <tr>
                <th class="bg-black text-custom-jaune"></th>
                <th class="bg-black text-xs sm:text-sm text-custom-jaune">Article</th>
                <th class="bg-black text-xs sm:text-sm text-custom-jaune">Quantité</th>
                <th class="bg-black text-xs sm:text-sm text-custom-jaune">Prix total</th>
                <th class="bg-black text-xs sm:text-sm text-custom-jaune">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!isLoading && commandesRecentes.length > 0" v-for="(item, index) in commandesRecentes"
                :key="index">
                <th class="text-black">1</th>
                <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.articleName }}</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.quantite }}</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.prixTotal }} FCFA</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">
                  <div class="flex items-center gap-x-3">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md"
                      @click="() => alertDelete(index)">
                      <vue-feather size="20" stroke-width="2.1" type="trash-2"></vue-feather>
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="!isLoading && commandesRecentes.length === 0">
                <td colspan="5">
                  <div class="w-full h-32 text-red-500 flex items-center justify-center gap-x-2">
                    <vue-feather size="20" stroke-width="2.1" type="alert-circle"></vue-feather>
                    <p class="text-red-500 text-sm sm:text-base md:text-lg font-semibold">Aucun élément trouvé.</p>
                  </div>
                </td>
              </tr>
              <tr v-if="isLoading && commandesRecentes.length === 0">
                <td colspan="5">
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


        <!-- Modal de suppression de commande -->
        <input type="checkbox" id="modal-delete" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <div class="flex flex-col items-center text-red-500">
              <vue-feather size="25" stroke-width="2.1" type="alert-triangle"></vue-feather>
              <h3 class="font-bold text-lg text-center text-red-500">Supprimer cette commande</h3>
            </div>
            <p class="py-4 text-center text-sm sm:text-base font-medium">Cette commande sera supprimé de votre liste et
              vous ne pourrez plus la récupérer</p>

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
      </div>
    </div>
  </GridLayout>
</template>

<script setup>
import { ref } from 'vue';
import GridLayout from '../../layouts/GridLayout.vue';
import ProgressSpinner from 'primevue/progressspinner';

const commandesRecentes = ref([
  {
    articleName: 'Sac de voyage GUCCI',
    quantite: '2',
    prixTotal: '64000'
  }
])
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