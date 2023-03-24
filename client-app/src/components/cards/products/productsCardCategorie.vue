<script setup>
defineProps({
   img: String,
   name: String,
   sub: String,
});
</script>
<template>
   <div class="flex flex-col bg-slate-50 p-3 gap-1 rounded-lg w-full">
      <div class="inline-flex h-[70px] rounded-lg bg-slate-100">
         <img :src="img" alt="" />
      </div>

      <div class="flex flex-col items-center">
         <p class="text-center text-[10px] font-bold">{{ name }}</p>
         <span class="text-center text-xs "> {{ sub }} </span>
      </div>
   </div>
</template>
<style scoped></style>
