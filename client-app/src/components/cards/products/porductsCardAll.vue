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

      <div class="flex flex-col  mx-1">
         <p class=" text-xs font-normal flex">{{ title }}</p>
         <span class="text-sm font-bold"> {{ price }} </span>
      </div>
   </a>
</template>
<style scoped></style>
