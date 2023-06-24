<script setup>
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import SearchBars from '../../components/Bars/search.bars.vue';
import HeadingRedirect from '../../components/heading/headingRedirect.vue';
import PorductsCardAll from '../../components/cards/products/porductsCardAll.vue';
import { onMounted, ref, reactive } from 'vue';
import axios from 'axios';
import { URL } from '../../router/url';
import CardStore from '../../components/cards/stores/card.store.vue';

// Obtenir tous les produits
const Products = reactive({
   data: ref(),
   caches: ref(),
   laoding: false,
   length: 0,
});

// Get All Prodducts
const getAllProduits = async () => {
   try {
      const { data } = await axios.get(URL.PRODUCTS);
      if (data) {
         data.produit;
         Products.data = data.produit.slice(0, 4);
         Products.length = data.produit.length;
         Products.caches = data.produit;
      }
   } catch (error) {
      console.log(error);
   }
};

// Get All Store
const Stores = reactive({
   data: ref(),
   caches: ref(),
   laoding: false,
   length: 0,
});
const getAllStore = async () => {
   try {
      const { data } = await axios.get(URL.STORE_ALL);
      if (data) {
         Stores.data = data.boutique.slice(0, 4);
         Stores.length = data.boutique.length;
         Stores.caches = data.boutique;
      }
   } catch (error) {
      console.log(error);
   }
};

const searchInStore = (e) => {
   Products.data = Products.caches.filter((produit) => {
      return produit.name
         .toLocaleLowerCase()
         .includes(e.target.value.toLocaleLowerCase());
   });
};

onMounted(() => {
   getAllProduits();
   getAllStore();
});
</script>
<template>
   <SearchBars :search-in-data="searchInStore" />

   <div class="w-11/12 m-auto mt-4 pb-8 flex flex-col gap-8">
      <!-- Juste selectionner pour vous -->
      <div class="flex flex-col gap-4 ">
         <!-- Section populaire -->
         <HeadingRedirect
            v-if="Products"
            :name="'Tous les produits (' + Products.length + ')'"
         />

         <div class="grid grid-cols-2 gap-3">
            <div v-for="product in Products.data">
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
      </div>



      <div class="flex flex-col gap-4 pb-24">
         <!-- Section populaire -->
         <HeadingRedirect
            v-if="Stores"
            :name="'Les boutiques (' + Stores.length + ')'"
         />


         <div class="grid grid-cols-2 gap-2">
      <div v-for="store in Stores.data">
               <CardStore
                  :image="store.media[0]?.original_url"
                  :name="store.name"
               />
            </div>
            </div>
            </div>
   </div>

   <FooterNavigation />
</template>
<style scoped></style>
