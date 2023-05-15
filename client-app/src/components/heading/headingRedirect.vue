
<script setup>
defineProps({
    name: String,
    redirect: String
})
   
</script>
<template>


<a :href="redirect" class="">
    <div class="flex justify-between items-center opacity-90">
       <p class="text-xl opacity- font-black"> {{ name }} </p>

       <div class="flex">
          <i class="fi fi-bs-arrow-right flex"></i>
       </div>
    </div>
 </a>




</template>
<style scoped></style>
