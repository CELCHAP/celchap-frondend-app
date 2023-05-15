<script setup>
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';




import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import { URL } from './../../router/url';
import { RouterLink } from 'vue-router';



</script>
<template>
   <!-- <HeaderNavigation /> -->

   <section class="flex flex-col">
    
    <span>  
        Deleoppez votre business a partir de celchap!
    </span>

    <span>Demarez la creation  de votre boutique</span>
    
    <div class="flex gap-2">
        <RouterLink :to="{name: 'SignUp'}"> Je cree ma boutique </RouterLink>
        <RouterLink :to="{name: 'SignIn'}"> J'ai deja une boutique </RouterLink>
    </div>

   </section>

   <FooterNavigation />
</template>
<style scoped></style>
