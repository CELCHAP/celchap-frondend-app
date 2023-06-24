<script setup>

defineProps({
    searchInData: Function
})

</script>
<template>

    <div class=" w-full  py-3 border-b-[1px]">
    
        <div class="flex justify-between m-auto items-center w-11/12">
                <!--  -->
        <div class="" @click="$router.go(-1)">
            <span class="text-lg font-bold">CLP.</span>
        </div>

        <!-- Bloc de recherche -->
        <div class="">
            <input @input="searchInData" class="outline-none" type="search" placeholder="Recherche sur CelChap" name="Hsearch" id="HsearchID">
        </div>

        <!-- Parametre -->
        <div class="">
            <i class="flex fi fi-sr-settings"></i>
        </div>
        </div>

    </div>

</template>
<style></style>