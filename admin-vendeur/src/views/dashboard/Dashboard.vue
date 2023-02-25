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
                <th class="bg-black text-sm text-custom-jaune">Article</th>
                <th class="bg-black text-sm text-custom-jaune">Quantité</th>
                <th class="bg-black text-sm text-custom-jaune">Prix total</th>
                <th class="bg-black text-sm text-custom-jaune">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="text-orange-500">1</th>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Cy Ganderton</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Quality Control Specialist</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Blue</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">
                  <div class="flex items-center gap-x-3">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="trash-2"></vue-feather>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="text-orange-500">2</th>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Hart Hagerty</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Desktop Support Technician</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Purple</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">
                  <div class="flex items-center gap-x-3">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="trash-2"></vue-feather>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="text-orange-500">3</th>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Brice Swyre</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Tax Accountant</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Red</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">
                  <div class="flex items-center gap-x-3">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="trash-2"></vue-feather>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="text-orange-500">3</th>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Brice Swyre</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Tax Accountant</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Red</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">
                  <div class="flex items-center gap-x-3">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="trash-2"></vue-feather>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="text-orange-500">3</th>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Brice Swyre</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Tax Accountant</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">Red</td>
                <td class="text-gray-600 text-sm sm:text-base font-medium">
                  <div class="flex items-center gap-x-3">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="20" stroke-width="2.1" type="trash-2"></vue-feather>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </GridLayout>
</template>

<script setup>
import GridLayout from '../../layouts/GridLayout.vue';

</script>

<style scoped></style>