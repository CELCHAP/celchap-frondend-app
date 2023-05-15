<script setup>
import { reactive, onMounted, ref } from 'vue';
defineProps({
    titleHeader: String,
    subHeader: String
})
</script>
<template>
   <div class="mb-2">
      <span class="text-3xl font-black text-orange-400">CELCHAP.</span>
   </div>

   <div class="flex flex-col mb-4">
      <span class="text-xl font-bold"> {{ titleHeader }} </span>
      <span class="text-sm"> {{ subHeader }} </span>
   </div>
</template>
<style scoped></style>
