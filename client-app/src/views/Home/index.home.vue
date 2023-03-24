<script setup>
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
</script>
<template>
   <HeaderNavigation />

   <div class="pt-28 w-11/12 m-auto flex flex-col gap-4">
      <!-- Section Pub -->
      <div class="snap-x mx-auto snap-mandatory h-[20vh] flex w-full overflow-scroll">
    <div class="snap-start bg-amber-200 w-96 flex-shrink-0  flex items-center justify-center text-xl">1</div>
    <div class="snap-start bg-teal-200 w-96 flex-shrink-0   flex items-center justify-center text-xl">2</div>
    <div class="snap-start bg-cyan-200 w-96 flex-shrink-0 flex items-center justify-center text-xl">3</div>
    <div class="snap-start bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-xl">4</div>
</div>

      <!-- Section populaire -->
      <div class="">
         <div class="flex justify-between items-center">
            <p class="text-lg font-bold">Populaire(s)</p>

            <div class="flex">
               <i class="fi fi-bs-arrow-right flex"></i>
            </div>
         </div>
      </div>
   </div>

   <FooterNavigation />
</template>
<style scoped></style>
