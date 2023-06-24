<script setup>
import { reactive, ref } from 'vue';
import InputForm from '../../forms/input.form.vue';
const props = defineProps({
   xcloseOrder: {
      type: Boolean,
      default: true,
   },
});

const emit = defineEmits(['close', 'delete']);

const city = reactive(['Abidjan', 'Bouaké', 'San Pedro', 'Bouaflé']);
const towns = reactive(['Port Bouet', 'Koumassi', 'Marcory', 'Abobo', 'Rivera', 'Cocody', 'Plateau', 'Bigervielle']);



</script>
<template>
   <!-- Options de passer la commande -->
  
   <div
      class="fixed inset-0 bg-gray-200/80 flex flex-col items-center justify-end z-20" 
   >
      <div
         class="bg-white shadow-lg relative top-0 w-full rounded-t-[3em] h-[80vh] overflow-y-auto"
      >
         <div class="relative top-0 flex flex-col items-center">
            <div
               class="fixed bg-white rounded-t-[1em] px-8 flex justify-between py-4 w-full border-b-[1px] z-20 items-center"
            >
               <span class="text-base font-bold"> Passer votre Commande</span>
               <i class="flex fi fi-sr-cross" @click="$emit('close', false)"></i>
            </div>

            <div class="w-10/12 m-auto flex flex-col pt-20 pb-8 gap-4">
               <InputForm
                  label="Nom complet"
                  placeholder="Ange emmanuel Diomande"
               />
               <InputForm
                  label="Numero de telephone"
                  placeholder="07 57 35 77 48"
               />

               <div class="flex flex-col gap-1">
                <label for="" class="text-xs font-bold opacity-60"> Votre ville de livraison </label>
                <select name="city" id="" class="border-[1px] px-2 py-4 rounded-lg">
                  <option :value="cy" v-for="cy in city"> {{ cy }} </option>
               </select>
               </div>

               <div class="flex flex-col gap-1">
                <label for="" class="text-xs font-bold opacity-60">Votre commune de livraison</label>
                <select name="towns" id="" class="border-[1px] px-2 py-4 rounded-lg">
                <option :value="town" v-for="town in towns"> {{ town }} </option>
               </select>
               </div>

               
               <InputForm label="Précisez votre position" placeholder="Description..." />

               <div class="flex gap-2 w-full">
                  <button class="bg-orange-400 p-4 w-full rounded-lg text-base font-bold text-white">
                     Valider la commande
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>


</template>
<style scoped></style>
