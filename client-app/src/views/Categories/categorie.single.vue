<script setup>
import { useRouter } from 'vue-router';
import PorductsCardAll from '../../components/cards/products/porductsCardAll.vue';
import HeadingRedirect from '../../components/heading/headingRedirect.vue';
import DetailNavigation from '../../navigations/detail.navigation.vue';

defineProps({
    name: String
})
const router = useRouter()
</script>
<template>

   <DetailNavigation />


   <div class="flex flex-col gap-2 py-24 w-11/12 m-auto">
         <!-- Section populaire -->
         <HeadingRedirect name="Juste pour vous" />

         <div class="grid grid-cols-2 gap-2">
            <div v-for="item in 8">
               <PorductsCardAll
                  title="Chausure en ventre a la rivera 2"
                  price="8000 Fcfa"
                  img="https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmV0ZW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
               />
            </div>
         </div>
      </div>

</template>
<style></style>