<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import InputForm from '../../components/forms/input.form.vue';
import { getAllCategories } from '../../services/categorie.services';
import { Sigup, SignStore } from '../../services/auth.services';
import FormHeader from './../auth/__partiels/form.header.vue';
import { useRouter } from 'vue-router';
import { CreateProduitSimple } from '../../services/product.services';

const Categories = ref();
const LogoStore = ref();
const LoadedImage = ref();
const inputError = reactive({
   path: '',
   message: '',
});

const Localization = reactive([
   {
      name: 'Abidjan',
   },
   {
      name: 'Bouaké',
   },
]);

const AvailableProducts = reactive([
   {
      name: 'Disponible',
   },
   {
      name: 'Pas Disponible',
   },
   {
      name: 'Stock Epuise',
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
   LoadedImage.value = e.target.files;
   let reader = new FileReader();
   reader.onload = function (e) {
      LogoStore.value = e.target.result;
   };
   reader.readAsDataURL(e.target.files[0]);
};
const router = useRouter();

// Button of validation
const s__CreateProduitSimple = async (e) => {
   const getDataInput = Object.fromEntries(new FormData(e.target));

   const getData = new FormData();
   getData.append('name', getDataInput.name);
   getData.append('prix_vendeur', getDataInput.prix_vendeur);
   getData.append('description', getDataInput.description);
   getData.append('category', getDataInput.category);
   getData.append('type', 'detail');
   getData.append('disponibilite', getDataInput.disponibilite);
   

   for (let index = 0; index < LoadedImage.value.length; index++) {
      const img = LoadedImage.value[index];
      getData.append(`image[${index}]`, img);
   }

   await CreateProduitSimple(getData).then(({ data, error }) => {
      if (error) {
         inputError.path = error.path;
         inputError.message = error.message;
      }
      if (data) {
         const inputClass = document.querySelectorAll('.inputClass');
         inputClass.forEach((el) => {
            el.value = '';
         });
         inputError.path = '';
         LogoStore.value = null;
      }
   });
};
</script>
<template>
   <section class="flex flex-col gap-4 w-11/12 m-auto pt-8 pb-24">
      <FormHeader
         title-header="Créez un produit"
         sub-header="Renseignez les informations pour bien votre produit..."
      />

      <form
         class="flex flex-col gap-4"
         @submit.prevent="s__CreateProduitSimple"
      >
         <InputForm
            label="intitulé du produit"
            name="name"
            placeholder="Chemise Wax - Coukleur blue"
            :input-error="inputError"
         />

         <InputForm
            label="Prix du produit"
            name="prix_vendeur"
            placeholder="17 000 Fcfa"
            :input-error="inputError"
         />

         <InputForm
            input-el="textarea"
            label="Description du produit"
            name="description"
            placeholder="Donnez une description complete de votre produit."
            :input-error="inputError"
         />

         <InputForm
            input-el="select"
            label="Categorie du produit ?"
            :select-options="Categories"
            select-option-display="name"
            select-option-i-d="id"
            name="category"
            placeholder="Ange Emmanuel"
            :input-error="inputError"
         />

         <InputForm
            input-el="select"
            label="Diponibilité du produit"
            :select-options="AvailableProducts"
            select-option-display="name"
            select-option-i-d="id"
            name="disponibilite"
            placeholder="Diponibilité"
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
                     Ajoutez des images de votre produit, pour mieux le vendre.
                  </span>
               </div>
            </label>
            <input
               type="file"
               @change="changeImage"
               class="hidden"
               id="fileID"
               multiple
               name="image"
               placeholder="Ajouter une image"
            />
         </div>

         <div class="grid grid-cols-2 w-full bg-white fixed bottom-0 left-0">
            <button
               type="button"
               class="text-white bg-gray-700"
               @click="$router.go(-1)"
            >
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
