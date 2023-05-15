<script setup>
defineProps({
   image: String,
   name: String,
   sub: String,
});
</script>
<template>
   <div class="flex flex-col   gap-1 rounded-full w-full">
    
         <img v-lazy="image" alt="" class="rounded-full h-[80px] object-cover" />
  

      <div class="flex flex-col items-center">
         <p class="text-center text-[10px] font-ligth">{{ name.length > 10 ? name.substring(0, 10) + '...' : name }}</p>
         <span class="text-center text-xs font-light"> {{ sub }} </span>
      </div>
   </div>
</template>
<style scoped></style>
