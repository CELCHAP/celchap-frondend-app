<script setup>
import { ref, onMounted } from 'vue';
import BackBarLayout from '../../../layouts/backBar.layout.vue';
import HeadingRedirect from '../../../components/heading/headingRedirect.vue';
import PorductsCardAll from '../../../components/cards/products/porductsCardAll.vue';
import axios from 'axios';
import { URL } from '../../../router/url';

onMounted(() => {
   getAllProduits();
});

const ProductsCaches = ref();
const Products = ref();
const getAllProduits = async () => {
   try {
      const { data } = await axios.get(URL.PRODUCTS);
      if (data) {
         Products.value = data.produit;
         ProductsCaches.value = data.produit;
      }
   } catch (error) {
      console.log(error);
   }
};

const searchInProduct = (e) => {
   Products.value = ProductsCaches.value.filter((produit) => {
      return produit.name
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
               @input="searchInProduct"
               type="search"
               placeholder="Rechercher un produit..."
               class="py-3 outline-none bg-transparent"
            />
         </div>
      </section>

      <section class="flex flex-col w-11/12 m-auto gap-4">
         <HeadingRedirect
            v-if="Products"
            :name="`Tous les boutiques (` + Products.length + ')'"
         />

         <div class="grid grid-cols-2 gap-2">
            <div v-for="product in Products">
               <PorductsCardAll
                  :id="product.id"
                  :code="product.code"
                  :title="product.name"
                  :price="product.prices[0]?.prix_afficher + 'Fcfa'"
                  :img="
                     product?.media.length === 0
                        ? ImageTonpon
                        : product?.media[0]?.original_url
                  "
               />
            </div>
         </div>
      </section>
   </main>
</template>
<style scoped></style>
