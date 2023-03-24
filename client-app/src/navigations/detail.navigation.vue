<script setup>
import { useRouter } from 'vue-router';

defineProps({
   name: String,
});
const router = useRouter();
</script>
<template>
   <div class="w-full py-4 border-b-[1px] fixed top-0 bg-white">
      <div class="flex justify-between  m-auto items-center w-11/12">
         <!--  -->
         <div @click="$router.go(-1)" class="w-1/12">
            <i class="flex fi fi-sr-cross text-lg"></i>
         </div>

        

         <!-- Parametre -->
         <div class="border-[1px]  w-11/12 rounded-full px-4 m-auto">
         <input type="search" placeholder="Rechercher dans chausures" class="py-2 rounded-full" name="" id="" />
      </div>
      </div>

      
   </div>
</template>
<style></style>
