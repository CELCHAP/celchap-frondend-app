<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import { URL } from './../../router/url';
import InputForm from '../../components/forms/input.form.vue';
import { getAllCategories } from '../../services/categorie.services';
import FormStoreConnexion from '../auth/__partiels/form.connexion.vue';
import FormHeader from './__partiels/form.header.vue';
</script>
<template>
   <main class="flex ">
      <section
         class="flex flex-col  gap-4 m-auto py-32  h-full w-full px-4"
      >
         <FormHeader
            title-header="Créez un compte Celchap."
            sub-header="Profitez d'une expérience d'achat et de vente plus rapide et plus facile en créant un compte Celchap."
         />

         <!-- Form For the creation store -->
         <FormStoreConnexion />
      </section>
   </main>
</template>
<style scoped></style>
