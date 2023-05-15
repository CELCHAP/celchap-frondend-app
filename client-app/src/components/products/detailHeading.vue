<script setup>
defineProps(['titile', 'titileSub'])

</script>

<template>
 <div class="flex flex-col gap-1 opacity-90">
            <span class="text-base font-bold"> {{ titile }} </span>
            <span class="text-xs font-semibold opacity-50"> {{ titileSub }}</span>
         </div>
</template>

<style >

</style>
