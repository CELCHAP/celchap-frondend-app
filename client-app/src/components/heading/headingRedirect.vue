
<script setup>
defineProps({
    name: String,
    redirect: String
})
   
</script>
<template>


<a :href="redirect" class="">
    <div class="flex justify-between items-center">
       <p class="text-lg font-bold"> {{ name }} </p>

       <div class="flex">
          <i class="fi fi-bs-arrow-right flex"></i>
       </div>
    </div>
 </a>




</template>
<style scoped></style>
