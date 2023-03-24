
<script setup>
defineProps({
    label: String,
    name:String,
    placeholder: String
})
   
</script>
<template>


<div class="flex flex-col gap-1">
    <label class="text-xs opacity-60 font-bold" :for="name+'ID'"> {{ label }} </label>
    <input type="text" :id="name+'ID'" class="border-b-[1px] pb-1" :placeholder="placeholder" :name="name">
</div>




</template>
<style scoped></style>
