<script setup>
defineProps({
    image: String,
   name: String,
   id: String
});
</script>
<template>
  
  <RouterLink :to="`/store/view/${id}`"
class=" relative flex flex-col rounded-lg w-full border-[0px] border-purple-500"
>
<div class="h-[130px] p-2">
   <img
      v-lazy="image"
      alt=""
      class="w-full h-full object-cover rounded-lg"
   />
</div>

<div class=" w-full">
   <span
      class="py-1 px-2 text text-sm text-white bg-purple-500/80 w-full flex font-bold justify-center rounded-b-lg"
   >
      {{
         name.length > 13
            ? name.substring(0, 10) + '...'
            : name
      }}
   </span>
</div>
</RouterLink>

</template>
<style scoped></style>
