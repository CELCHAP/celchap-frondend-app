<script setup>
defineProps({
   img: String,
   name: String,
   sub: String,
});
</script>
<template>
   <div class="flex flex-col   gap-1 rounded-lg w-full">
      <div class="inline-flex h-[100px] rounded-lg bg-slate-100">
         <img :src="img" alt="" class="flex object-cover rounded-lg" />
      </div>

      <div class="flex flex-col gap-1 mt-1">
         <p class=" text-sm font-bold">{{ name }}</p>
         <span class="text-center text-xs "> {{ sub }} </span>
      </div>
   </div>
</template>
<style scoped></style>
