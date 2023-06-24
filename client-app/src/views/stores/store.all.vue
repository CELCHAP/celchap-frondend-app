<script setup>
import { ref, onMounted } from 'vue';

import { getAllStore } from '../../services/store.services';
import CardStore from '../../components/cards/stores/card.store.vue';
import BackBarLayout from '../../layouts/backBar.layout.vue';
import HeadingRedirect from '../../components/heading/headingRedirect.vue';

onMounted(() => {
   getAllStore__o();
});

const DataAllSotreCache = ref();
const DataAllSotre = ref();
const getAllStore__o = async () => {
   await getAllStore().then(({ data, error }) => {
      if (error) {
         inputError.path = error.path;
         inputError.message = error.message;
      }
      if (data) {
         DataAllSotre.value = data.boutique;
         DataAllSotreCache.value = data.boutique;
      }
   });
};

const searchInStore = (e) => {
   DataAllSotre.value = DataAllSotreCache.value.filter((store) => {
      return store.name
         .toLocaleLowerCase()
         .includes(e.target.value.toLocaleLowerCase());
   });
};
</script>
<template>
   <BackBarLayout name="Les boutiques" />

   <main class="flex flex-col gap-6 mb-8">
      <section class="pt-20 w-[90%] m-auto flex flex-col gap-6">
         <!-- Barre de recherche! -->
         <div
            class="bg-gray-100 border-[0px] rounded-lg px-4 gap-1 flex justify-center items-center w-full"
         >
            <i class="fi fi-sr-search flex opacity-20"></i>
            <input
               @input="searchInStore"
               type="search"
               placeholder="Rechercher un produit..."
               class="py-3 outline-none bg-transparent"
            />
         </div>
      </section>

      <section class="flex flex-col w-11/12 m-auto gap-4" >
         <HeadingRedirect v-if="DataAllSotre" :name="`Tous les boutiques (` + DataAllSotre.length +')'"  />

         <div class="grid grid-cols-2 gap-2">
            <div v-for="store in DataAllSotre">
               <CardStore
                  :image="store.media[0]?.original_url"
                  :name="store.name"
               />
            </div>
         </div>
      </section>
   </main>
</template>
<style scoped></style>
