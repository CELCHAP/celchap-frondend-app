<script setup>
import { ref, onMounted } from 'vue';
import { URL } from '../../router/url';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import BackBarLayout from '../../layouts/backBar.layout.vue';
import HeadingRedirect from '../../components/heading/headingRedirect.vue';
import PorductsCardAll from '../../components/cards/products/porductsCardAll.vue';

onMounted(() => {
   getOneStore();
});

//
const route = useRoute();
const StoreShow = ref();
const getOneStore = async () => {
   try {
      const { data } = await axios.get(
         URL.STORE_ONE + '?id=' + route.params.id
      );
      if (data) {
         StoreShow.value = data.boutique;
      }
   } catch (error) {
      console.log(error);
   }
};
</script>
<template>
   <main v-if="StoreShow">
      <BackBarLayout
         :name="`Boutique ${
            StoreShow.name.length > 15
               ? StoreShow.name.substring(0, 15) + '...'
               : StoreShow.name
         }`"
      />

      <section class="flex flex-col w-11/12 m-auto gap-4 mt-20">
         <HeadingRedirect
            :name="`Tous les produits (` + StoreShow.produits.length + ')'"
         />

         <div class="grid grid-cols-2 gap-2" v-if="StoreShow.produits">
            <div v-for="product in StoreShow.produits">
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
