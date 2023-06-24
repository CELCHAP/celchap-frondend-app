<script setup>
import { ref } from 'vue';
import { useNavigationComposable } from '../composables/navigation.composable';

defineProps({});

const { MenuFooter, MenuFooterActived } = useNavigationComposable();

</script>
<template>
   <div class="flex flex-col w-full bg-white fixed bottom-0 border-t-[0px] z-20 shadow-[0_25px_20px_15px_rgba(0,0,0,0.3)]">
      <!-- Fist section Header -->
      <div class="flex justify-between w-11/12 m-auto py-2 ">
      
         <div  v-for="menuF in MenuFooter" >
            <RouterLink :to="{name: menuF.link}" class="flex flex-col items-center justify-center gap-1" :class="menuF.actived ? ' opacity-100 text-orange-400' : ' opacity-60'">
                <i class="text-xl font-bold" :class="menuF.actived ? menuF.isAIcon : menuF.icon"></i>
            <span class="text-xs" :class="menuF.actived ? 'font-extrabold' : ''" > {{ menuF.name }} </span>
            </RouterLink>
        </div>
      </div>
   </div>
   {{ MenuFooterActived }}
</template>
<style scoped></style>
