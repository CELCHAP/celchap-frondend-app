<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import InputForm from '../../components/forms/input.form.vue';
import { getAllCategories } from '../../services/categorie.services';
import { Signin } from '../../services/auth.services';
import FormHeader from './../auth/__partiels/form.header.vue';
import { useRouter } from 'vue-router';

const Categories = ref();
const LogoStore = ref();
const LoadedImage = ref();
const inputError = reactive({
   path: '',
   message: ''
})

const Localization = reactive([
   {
      name: 'Abidjan',
   },
   {
      name: 'Bouaké',
   },
]);

// Start
onMounted(async () => {
   await getAllCategories().then(({ data, error }) => {
      Categories.value = data;
   });
});

// Change image of logo
const changeImage = (e) => {
   LoadedImage.value = e.target.files[0];
   let reader = new FileReader();
   reader.onload = function (e) {
      LogoStore.value = e.target.result;
   };
   reader.readAsDataURL(e.target.files[0]);
};
const router = useRouter()

// Button of validation
const SignIn = async (e) => {
   const getData = Object.fromEntries(new FormData(e.target));
   await Signin(getData).then(({ data, error }) => {
      if (error) {
         inputError.path = error.path;
         inputError.message = error.message;
      }
      if(data){
         localStorage.setItem('access_token', data.access_token)
         localStorage.setItem('user', JSON.stringify(data.user))
         window.location.assign('/')
      }
   });
};
</script>
<template>
   <section class="flex flex-col gap-4 w-11/12 m-auto pt-8 pb-24">
      <FormHeader title-header="Se connecter à Likidons" sub-header="De nouveau profuit vous attendre sur likidons, connectez-vous vite..." />

      <form class="flex flex-col gap-4" @submit.prevent="SignIn">
         <InputForm
            label="Numero de telephone"
            name="phone"
            placeholder="Dolubux Store"
            :input-error="inputError"
         />

         <InputForm
            label="Mot de passe"
            name="password"
            type="password"
            placeholder="*** *** ***"
            :input-error="inputError"
         />
      
       


         <div class="grid grid-cols-2 w-full bg-white fixed bottom-0 left-0">
            <button type="button" class="text-white bg-gray-700" @click="$router.go(-1)">
               Annuler
            </button>
            <button
               type="submit"
               class="outline-none decoration-transparent py-3 flex gap-2 items-center justify-center text-white bg-orange-400"
            >
               <span class="font-bold">Se Connecter</span>
               <i class="flex fi fi-sr-arrow-small-right"></i>
            </button>
         </div>
      </form>
   </section>
</template>
<style scoped></style>
