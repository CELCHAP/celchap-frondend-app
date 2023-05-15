
<script setup>
import { reactive } from 'vue';

const footerDetailPoducts = reactive([
   // {
   //    name: 'Ajouter au panier',
   //    icon: 'fi fi-sr-shopping-cart-add',
   //    color: ' bg-orange-400',
   //    callback: ''
   // },
   {
      name: 'Commander',
      icon: 'fi fi-sr-wallet',
      color: ' bg-purple-500',
      callback: ''
   },
])


</script>

<template>
<div class="grid grid-cols-1 w-full fixed bottom-0 bg-white">
            <div v-for="item in footerDetailPoducts">
               <button 
                  class=" w-full h-full py-3 text-sm font-bold text-white flex items-center gap-2 justify-center" :class="item.color"
               >
                  <i :class="'flex '+ item.icon" ></i>
                  <span> {{ item.name }} </span>
               </button>
            </div>
         </div>
</template>

<style >
body{
  overflow-x: hidden !important;
}
</style>
