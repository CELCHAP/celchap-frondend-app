<script setup>
import { useRouter } from 'vue-router';

defineProps({
    name: String
})
const router = useRouter()
</script>
<template>

    <div class=" w-full  py-4 border-b-[1px] fixed top-0 bg-white z-20">
    
        <div class="flex justify-between m-auto items-center w-11/12">
                <!--  -->
        <div @click="$router.go(-1)" class="">
            <i class="flex fi fi-sr-arrow-left text-lg"></i>
        </div>

        <!-- Bloc de recherche -->
        <div class="">
            <span class="text-base font-bold"> {{ name }} </span>
        </div>

        <!-- Parametre -->
        <div class="">
            <i class="flex fi fi-sr-settings"></i>
        </div>
        </div>

    </div>

</template>
<style></style>