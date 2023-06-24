<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import InputForm from '../../../components/forms/input.form.vue';
import { Sigup } from '../../../services/auth.services';
import { useRoute, useRouter } from "vue-router"

const ChooseRoles = reactive([
   {
      name: 'Vendre',
      role: 'vendeur',
      active: true,
   },
   {
      name: 'Acheter',
      role: 'client',
      active: false,
   },
]);
const inputError = reactive({
   path: '',
   message: '',
});
const router = useRouter()

const ROLE = ref(ChooseRoles[0].role);
const SIGN_TO_CREATE_STORE = async (e) => {
   const getName = Object.fromEntries(new FormData(e.target));
   getName.indicatif = '225';
   getName.role = ROLE.value;
   console.log(getName);
   await Sigup(getName).then(({ data, error }) => {
      // If error exist
      if (error) {
         inputError.path = error.path;
         inputError.message = error.message;
      }
      if(data){
         localStorage.setItem('access_token', data.access_token)
         localStorage.setItem('user', JSON.stringify(data.user))
         if(data.user.roles[0].name == 'vendeur'){
            
            router.push({name: 'SignStore'})
         }else{
            router.push({name: 'Home'})
         }
      }
   });
};

const ChooseRolesActived = (name) => {

   ChooseRoles.forEach((role) => {
      role.active = false;
   });

   ChooseRoles.forEach((role) => {
      if (name === role.name) {
         role.active = true;
         ROLE = role.role;
      } 
   });

   
};
</script>
<template>
   <form class="flex flex-col gap-4" @submit.prevent="SIGN_TO_CREATE_STORE">
      <InputForm
         label="Nom complet"
         name="fullname"
         placeholder="celchap@info.com"
         :input-error="inputError"
      />

      <InputForm
         xtype="email"
         label="Adresse email"
         name="email"
         placeholder="celchap@info.com"
         :input-error="inputError"
      />

      <InputForm
         label="Numero de telephone"
         name="phone"
         placeholder="+225 05 025 154 10"
         info-input="Ce numero sera utiliser lors de la connexion"
         :input-error="inputError"
      />
      <InputForm
         xtype="password"
         label="Mot de passe"
         name="password"
         placeholder="Mot de passe"
         :input-error="inputError"
      />

      <div class="flex flex-col gap-1">
         <label class="text-xs opacity-60 font-bold" for=""
            >Pourquoi voulez-vous creer un compte ?</label
         >
         <div
            class="grid grid-cols-2 text-sm border-[1px] divide-x-[0px] rounded-md p-1"
         >
            <div
               @click="ChooseRolesActived(chooseRole.name)"
               class="py-2 flex justify-center"
               :class="
                  chooseRole.active
                     ? 'bg-yellow-400 rounded-md text-white font-bold'
                     : ''
               "
               v-for="chooseRole in ChooseRoles"
            >
               <span> {{ chooseRole.name }} </span>
            </div>
         </div>
      </div>

      <div class="grid grid-cols-2 w-full bg-white fixed bottom-0 left-0">
         <button type="buttom" class="text-white bg-gray-700">Annuler</button>
         <button
            type="submit"
            class="outline-none decoration-transparent py-3 flex gap-2 items-center justify-center text-white bg-orange-400"
         >
            <span class="font-bold text-sm">Créer mon compte</span>
            <i class="flex fi fi-sr-arrow-small-right"></i>
         </button>
      </div>
   </form>
</template>
<style scoped></style>
