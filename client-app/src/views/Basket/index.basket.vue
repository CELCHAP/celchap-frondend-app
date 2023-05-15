<script setup>
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import BasketBar from '../../components/Bars/basket.bar.vue';
import BackBarLayout from '../../layouts/backBar.layout.vue'
import BasketCard from '../../components/cards/baskets/basket.card.vue';
import BasketOrder from '../../components/cards/baskets/basketOrder.card.vue'
import BasketCheckout from '../../components/cards/baskets/basketCheckout.card.vue'
import { ref } from 'vue';

const closeOrder = ref(true)

   
</script>
<template>
    <BackBarLayout :name="'Paniers'" />

    
    <div class="py-12 h-[80vh] overflow-auto">
      
        <!-- Permier qui represente l'ensemble des items -->
       <div class="flex flex-col space-y-4 divide-y  p-4">
        <div v-for="items in 8" class="">
            <BasketCard />
        </div>
       </div>

       

    </div>

     <!-- Options de passer la commande -->
     <BasketOrder @close="(value) => closeOrder = value" />

    <BasketCheckout v-if="!closeOrder" @close="(value) => closeOrder = value"  />


    <!-- <FooterNavigation /> -->
</template>
<style scoped></style>
