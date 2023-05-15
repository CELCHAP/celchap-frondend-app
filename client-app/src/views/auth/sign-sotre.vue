<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import InputForm from '../../components/forms/input.form.vue';
import { getAllCategories } from '../../services/categorie.services';
import { Sigup, SignStore } from '../../services/auth.services';
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
const CreateStore = async (e) => {
   const getData = Object.fromEntries(new FormData(e.target));
   getData.indicatif = '225'
   getData.devise = 'Fcfa'
   await SignStore(getData).then(({ data, error }) => {
      if (error) {
         inputError.path = error.path;
         inputError.message = error.message;
      }
      if(data){
        localStorage.setItem('Store', JSON.stringify(data.boutique))
        router.push({name: 'MyStore'})
      }
   });
};
</script>
<template>
   <section class="flex flex-col gap-4 w-11/12 m-auto pt-8 pb-24">
      <FormHeader title-header="Créez votre boutique" sub-header="En créant une boutique sur Celchap, vous bénéficiez d'une vente exclusive. Ne manquez pas cette occasion de faire des beneficies." />

      <form class="flex flex-col gap-4" @submit.prevent="CreateStore">
         <InputForm
            label="Nom de la boutique"
            name="name"
            placeholder="Dolubux Store"
            :input-error="inputError"
         />

         <InputForm
            label="Numero de telephone"
            name="phone"
            placeholder="+225 05 025 154 10"
            :input-error="inputError"
         />
         <InputForm
            input-el="textarea"
            label="Où étes-vous situé ?"
            name="description"
            placeholder="Donnez une description complete de votre boutique."
            :input-error="inputError"
         />
       

         <InputForm
            input-el="select"
            label="Qu'es ce que vous Vendez ?"
            :select-options="Categories"
            select-option-display="name"
            select-option-i-d="id"
            name="category"
            placeholder="Ange Emmanuel"
            :input-error="inputError"
         />

         

         <div class="">
            <label for="fileID" class="flex items-center gap-2 w-full">
               <div
                  class="w-24 h-24 bg-gray-100 rounded-md flex justify-center items-center"
               >
                  <img
                     v-if="LogoStore"
                     :src="LogoStore"
                     class="w-full h-full rounded-md p-2"
                     alt=""
                  />
                  <i
                     class="fi fi-sr-picture text-4xl text-orange-400"
                     v-else
                  ></i>
               </div>
               <div class="flex flex-col w-[70%]">
                  <span>Logo (Cliquez-ici) </span>
                  <span class="text-xs">
                     Ajouter l'image de votre boutique, c'est celui qui vous
                     distingue en premiere lieu
                  </span>
               </div>
            </label>
            <input
               type="file"
               @change="changeImage"
               class="hidden"
               id="fileID"
               placeholder="Ajouter une image"
            />
         </div>

         <div class="grid grid-cols-2 w-full bg-white fixed bottom-0 left-0">
            <button type="button" class="text-white bg-gray-700">
               Annuler
            </button>
            <button
               type="submit"
               class="outline-none decoration-transparent py-3 flex gap-2 items-center justify-center text-white bg-orange-400"
            >
               <span class="font-bold">Créez</span>
               <i class="flex fi fi-sr-arrow-small-right"></i>
            </button>
         </div>
      </form>
   </section>
</template>
<style scoped></style>
