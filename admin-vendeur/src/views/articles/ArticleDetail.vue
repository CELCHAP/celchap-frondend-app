<template>
  <GridLayout>
    <div class="w-full px-6 pt-10 md:pt-6">
      <div>
        <router-link to="/articles">
          <button
            class="bg-emerald-200 text-black font-bold w-32 h-10 rounded-full flex items-center justify-center gap-2">
            <vue-feather type="arrow-left-circle"></vue-feather>Retour
          </button>
        </router-link>
      </div>

      <div class="mt-10">
        <h2 class="text-3xl text-black font-extrabold">Détail de l'article</h2>
      </div>
    </div>
  </GridLayout>
</template>

<script setup>
import { ref } from 'vue';
import GridLayout from '../../layouts/GridLayout.vue';
import ProgressSpinner from 'primevue/progressspinner';
</script>

<style></style>