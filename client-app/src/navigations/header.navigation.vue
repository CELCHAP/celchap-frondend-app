<script setup>
import { ref } from 'vue';
import { useNavigationComposable } from '../composables/navigation.composable';
defineProps({
   msg: String,
});
let scrollPosition;
const isUp = ref(true);


const handleScroll = () => {
    var currentScrollPosition = window.scrollY;
   if (currentScrollPosition < scrollPosition) {
      isUp.value = true;
   } else {
      isUp.value = false;
   }
   scrollPosition = window.scrollY;
};

window.addEventListener('scroll', handleScroll);
const { MenuHeaders, MenuHeaderActived } = useNavigationComposable();
</script>
<template>
   <div class="flex flex-col w-full bg-white fixed top-0 z-20 shadow-sm">
      <!-- Fist section Header -->
      <Transition>
         <div class="flex justify-between w-11/12 m-auto pt-4" v-if="isUp">
            <!-- Logo -->
            <div class="flex">
               <span class="font-black text-2xl  drop-shadow-[0_35px_35px_rgba(251, 146, 60,0.25)] text-orange-400">CELCHAP.</span>
            </div>

            <!-- Other icons -->
            <div class=""></div>
         </div>
      </Transition>

      <!-- Menu -->
      <div class="flex gap-4 w-11/12 m-auto mt-2" :class="!isUp ? 'py-2': 'pb-1'">
         <!-- Menu Produit -->
         <div v-for="menuH in MenuHeaders">
            <RouterLink
               :to="{ name: menuH.link }"
               class="pb-1 text-base"
               :class="
                  [menuH.actived
                     ? 'border-b-2 border-gray-500 px-0 font-bold '
                     : '', !isUp ? 'pb-2': '']
               "
            >
               <span> {{ menuH.name }} </span>
            </RouterLink>
         </div>
      </div>
   </div>
   {{ MenuHeaderActived }}
</template>
<style scoped></style>
