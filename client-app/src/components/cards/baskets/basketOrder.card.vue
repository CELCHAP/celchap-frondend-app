<script setup>


const emit = defineEmits(['close', 'delete'])

const PassToOrder = () => {
    emit('close', false)
}
   
</script>
<template>


        <!-- Options de passer la commande -->
        <div class="bg-orange-400 mx-4 my-4 p-4 flex justify-between items-center rounded-md fixed bottom-0 left-0 right-0">

            <div class="flex flex-col text-white">
                <span class="font-extralight text-sm opacity-90">Passer votre commande</span>
                <span class="text-lg font-extrabold">50.725 Fcfa</span>
            </div>

            <div class="">
                <button class="border-[1px] p-2 rounded-md" @click="PassToOrder">
                    <i class="fi fi-rr-angle-small-right text-white flex"></i>
                </button>
            </div>

        </div>




</template>
<style scoped></style>
