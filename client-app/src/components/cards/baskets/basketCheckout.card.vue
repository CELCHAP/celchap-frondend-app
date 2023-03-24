<script setup>
import InputForm from '../../forms/input.form.vue';


   
</script>
<template>


        <!-- Options de passer la commande -->
        <div class="fixed inset-0 bg-gray-200/80">

            <div class="bg-white shadow-lg fixed bottom-0 w-full rounded-t-[3em] h-[60vh]">

                <div class="w-10/12 m-auto flex flex-col py-10 gap-4">
                    <InputForm label="Nom complet" placeholder="Ange emmanuel Diomande" />
                <InputForm label="Numero de telephone" placeholder="07 57 35 77 48" />
                <InputForm label="Ville de livraison" />
                <InputForm label="votre commune" />
                <InputForm label="un bref descriptif de votre zone" />


                <div class="flex gap-2 w-full">
                    <button @click="$router.go(-1)" class="bg-gray-50 text-sm p-4 rounded-lg">Annuler</button>
                    <button class="bg-orange-400 p-4 w-8/12 rounded-lg text-sm">Valider la commande</button>
                </div>
                </div>

            </div>

        </div>




</template>
<style scoped></style>
