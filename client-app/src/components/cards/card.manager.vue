<script setup>
defineProps({
   managers: String,
});
</script>
<template>
   <div
      class="flex justify-between items-center gap-2 px-2 py-3 rounded-md"
      :class="manager.color"
      v-for="manager in managers"
   >
      <div class="w-12 h-12 rounded-full flex justify-center items-center">
         <i class="flex text-xl" :class="manager.icon"></i>
      </div>

      <div class="flex flex-col w-9/12">
         <span class="text-thin font-bold">
            {{ manager.name }}
         </span>
         <span class="text-xs">{{ manager.count }}</span>
      </div>

      <div
         class="w-8 h-8 text-xs bg-white flex rounded-full items-center justify-center"
      >
         <i class="fi fi-sr-angle-right flex"></i>
      </div>
   </div>
</template>
<style scoped></style>
