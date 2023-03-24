<template>
  <GridLayout>
    <div class="w-full px-6 pt-10 md:pt-6">
      <div>
        <router-link to="/commandes">
          <button
            class="bg-orange-100 text-sm text-black font-bold w-24 sm:w-28 h-8 sm:h-9 rounded-full flex items-center justify-center gap-2">
            <vue-feather type="arrow-left-circle" size="18"></vue-feather>Retour
          </button>
        </router-link>
      </div>

      <div class="mt-10">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl md:text-3xl text-neutral-800 font-extrabold">Détail de la commande</h2>
          <div class="flex items-end gap-x-2">
            <div class="tooltip" data-tip="Modifier le statut de la commande une fois que vous l'avez traité">
              <button class="">
                <vue-feather type="help-circle" size="18"></vue-feather>
              </button>
            </div>
            <p class="font-bold flex items-center gap-x-2">
              <span class="bg-green-100 text-green-500 w-24 h-8 rounded-md text-sm sm:text-base normal-case flex items-center justify-center shadow-sm">
               Validé
              </span>
            </p>
            <button class="bg-orange-500 text-white rounded-md w-8 h-8 flex items-center justify-center cursor-pointer">
              <vue-feather type="edit-3" size="18"></vue-feather>
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-y-5 md:grid md:grid-cols-6 gap-x-4 mt-10 pb-16">

          <div class="bg-white w-full h-fit rounded-md shadow-sm col-span-2">
            <h1
              class="text-sm sm:text-base md:text-lg text-custom-jaune font-bold bg-black px-4 py-2 rounded-tr-md rounded-tl-md">
              Info client
            </h1>
            <div class="p-3 sm:p-4 flex flex-col gap-y-4">
              <p class="text-sm sm:text-base text-neutral-700 font-bold">
                Nom & prénoms :
                <span class="text-sm sm:text-base text-gray-700 font-medium">
                  Kouassi Arnaud Jean-Mars
                </span>
              </p>
              <p class="text-sm sm:text-base text-neutral-700 font-bold">
                Email :
                <span class="text-sm sm:text-base text-gray-700 font-medium">
                  kgbader@gmail.com
                </span>
              </p>
              <p class="text-sm sm:text-base text-neutral-700 font-bold">
                Téléphone :
                <span class="text-sm sm:text-base text-gray-700 font-medium">
                  +225 0778812111
                </span>
              </p>
              <p class="text-sm sm:text-base text-neutral-700 font-bold">
                Adresse de livraison :
                <span class="text-sm sm:text-base text-gray-700 font-medium">
                  Cité universitaire, campus de Cocody
                </span>
              </p>
              <p class="text-sm sm:text-base text-neutral-700 font-bold">
                Date de livraison :
                <span class="text-sm sm:text-base text-gray-700 font-medium">
                  21 Décembre 2023
                </span>
              </p>
            </div>
          </div>

          <div class="bg-white w-full h-fit rounded-md shadow-sm col-span-4">
            <h1
              class="text-sm sm:text-base md:text-lg text-custom-jaune font-bold bg-black px-4 py-2 rounded-tr-md rounded-tl-md">
              Info produits
            </h1>

            <div class="detail-produit">
              <div class="overflow-x-auto">
                <table class="table table-compact rounded-none w-full">
                  <thead class="rounded-none">
                    <tr class="rounded-none">
                      <th class="text-sm pl-3">Nom</th>
                      <th class="text-sm">Quantité</th>
                      <th class="text-sm">Prix unitaire</th>
                      <th class="text-sm">Prix total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="pl-3">Cy Ganderton</td>
                      <td>2</td>
                      <td>2400 FCFA</td>
                      <td>4800 FCFA</td>
                    </tr>
                    <tr>
                      <td class="pl-3">Hart Hagerty</td>
                      <td>1</td>
                      <td>32000 FCFA</td>
                      <td>32000 FCFA</td>
                    </tr>
                    <tr>
                      <td class="pl-3">Brice Swyre</td>
                      <td>1</td>
                      <td>7000 FCFA</td>
                      <td>7000 FCFA</td>
                    </tr>
                    <tr>
                      <td class="pl-3">Marjy Ferencz frandc fesd</td>
                      <td>5</td>
                      <td>1200 FCFA</td>
                      <td>6000 FCFA</td>
                    </tr>
                    <tr>
                      <td class="pl-3">Yancy Tear</td>
                      <td>1</td>
                      <td>14000 FCFA</td>
                      <td>14000 FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              class="bg-[#F2F2F2] h-11 flex items-center justify-end px-5 sm:px-10 border-t border-gray-50 mt-3 rounded-br-md rounded-bl-md">
              <p class="text-sm text-black font-bold">
                Coût total : <span class="text-red-600 font-extrabold">63800 FCFA</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </GridLayout>
</template>

<script setup>
import { ref } from 'vue'
import GridLayout from '../../layouts/GridLayout.vue';
import ProgressSpinner from 'primevue/progressspinner';
</script>

<style scoped>
.detail-produit :where(.table *:first-child) :where(*:first-child) :where(th, td):first-child,
.detail-produit :where(.table *:first-child) :where(*:first-child) :where(th, td):last-child {
  border-radius: 0 !important;
}

.detail-produit .table th:first-child {
  position: relative;
}

.tooltip:before {
  background-color: #bfdbfe;
  color: black;
  font-weight: 500;
}
</style>