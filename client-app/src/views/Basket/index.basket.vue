<script setup>
import HeaderNavigation from '../../navigations/header.navigation.vue';
import FooterNavigation from '../../navigations/footer.navigation.vue';
import BasketBar from '../../components/Bars/basket.bar.vue';
import BackBarLayout from '../../layouts/backBar.layout.vue'
import BasketCard from '../../components/cards/baskets/basket.card.vue';
import BasketOrder from '../../components/cards/baskets/basketOrder.card.vue'
import BasketCheckout from '../../components/cards/baskets/basketCheckout.card.vue'

   
</script>
<template>
    <BackBarLayout :name="'Paniers'" />

    
    <div class=" m-auto mt-12 ">

        <!-- Permier qui represente l'ensemble des items -->
       <div class="flex flex-col space-y-4 divide-y h-[78vh] overflow-auto p-4">
        <div v-for="items in 8" class="">
            <BasketCard />
        </div>
       </div>

        <!-- Options de passer la commande -->
        <BasketOrder />

    </div>

    <BasketCheckout />


    <!-- <FooterNavigation /> -->
</template>
<style scoped></style>
