<script setup>
import { useRouter } from 'vue-router';
import PorductsCardAll from '../../components/cards/products/porductsCardAll.vue';
import HeadingRedirect from '../../components/heading/headingRedirect.vue';
import BackBarLayout from '../../layouts/backBar.layout.vue';
import ProductCardMin from "../../components/cards/products/productCardMin.vue"
import { onMounted, ref } from 'vue';

defineProps({
    name: String
})
const router = useRouter()

const Products = ref()

onMounted(() => {
    getAllProduits()
})

// Obtenir tous les produits
const getAllProduits = async () => {
   try {
      const { data } = await axios.get(URL.PRODUCTS);
      if(data){
         Products.value = data.produit
      }
   } catch (error) {
      console.log(error);
   }
};
</script>
<template>

<BackBarLayout name="Categories" />


<div class="flex bg-blue-500 h-[150px] mt-12 w-screen">
    0
</div>

<div class="flex flex-col divide-y-[1px] w-11/12 m-auto gap-4 pb-16" >   


<div v-for="item in 6">

    <div class="flex flex-col gap-4 pt-8 w-full">
    <HeadingRedirect :name="'Items ' + item" redirect="category/ts" />
    
        <div class="grid grid-cols-3 gap-2 justify-between w-full ">
            <div v-for="item in 3">
            <ProductCardMin  name="5000"   img="https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmV0ZW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
        </div>

</div>
</div>
</div>

</template>
<style></style>