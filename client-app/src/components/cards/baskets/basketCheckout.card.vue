<script setup>
import { ref } from 'vue';
import InputForm from '../../forms/input.form.vue';
const props = defineProps({
    xcloseOrder: {
        type: Boolean,
        default: true
    }

    
})
const closeOrder = ref(props.xcloseOrder)
const emit = defineEmits(['close', 'delete'])
const PassToOrder = () => {
    emit('close', true)
}

   
</script>
<template>


        <!-- Options de passer la commande -->
        <div class="fixed inset-0 bg-gray-200/80 flex flex-col items-center justify-end" >

            <div class="bg-white shadow-lg relative top-0 w-full rounded-t-[3em] h-[80vh] overflow-y-auto ">


               <div class="relative top-0 flex flex-col items-center">   

                <div class="fixed  bg-white rounded-t-[1em] px-8 flex justify-between py-4 w-full border-b-[1px] z-20 items-center">
                    <span> Commander</span>
                    <i class="flex fi fi-sr-cross" @click="PassToOrder" ></i>
                </div>

                <div class="w-10/12 m-auto flex flex-col  pt-20 pb-8 gap-4">
                    <InputForm label="Nom complet" placeholder="Ange emmanuel Diomande" />
                <InputForm label="Numero de telephone" placeholder="07 57 35 77 48" />
                <InputForm label="Ville de livraison" />
                <InputForm label="votre commune" />
                <InputForm label="un bref descriptif de votre zone" />


                <div class="flex gap-2 w-full ">
                    <button @click="$router.go(-1)" class="bg-gray-50 text-sm p-4 rounded-lg">Annuler</button>
                    <button class="bg-orange-400 p-4 w-8/12 rounded-lg text-sm">Valider la commande</button>
                </div>
                </div>


               </div>
            </div>

        </div>


   


</template>
<style scoped></style>
