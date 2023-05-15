<script setup>
import { RouterLink } from 'vue-router';
defineProps({
   img: String,
   title: String,
   price: String,
});
</script>
<template>
   <a href="/product/test" class="flex flex-col  rounded-lg w-full gap-2">
      <div class="inline-flex h-[150px] rounded-lg bg-slate-100">
         <img class="w-full h-full object-cover rounded-lg" v-lazy="img" alt="" />
      </div>

      <div class="flex flex-col gap-2 mx-1">
         <p class=" text-xs font-normal flex">{{ title }}</p>
         
         <div class="flex flex-col">
            <span class="text-thin font-bold"> {{ price }} </span>
            <span class="text-xs">1 unité (Com) </span>
         </div>

         
         
      </div>
   </a>
</template>
<style scoped></style>
