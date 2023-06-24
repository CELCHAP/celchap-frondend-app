<script setup>
import { reactive, ref } from 'vue';
import BasketOrderCard from '../cards/baskets/basketOrder.card.vue';
import BasketCheckoutCard from '../cards/baskets/basketCheckout.card.vue';

const closeOrder = ref(false)

const footerDetailPoducts = reactive([
   // {
   //    name: 'Ajouter au panier',
   //    icon: 'fi fi-sr-shopping-cart-add',
   //    color: ' bg-orange-400',
   //    callback: ''
   // },
   {
      name: 'Commander',
      icon: 'fi fi-sr-wallet',
      color: ' bg-purple-500',
      callback: '',
   },
]);
</script>

<template>
   <div class="grid grid-cols-1 w-full fixed bottom-0 bg-white">
      <div v-for="item in footerDetailPoducts">
         <button
            class="w-full h-full py-3 text-sm font-bold text-white flex items-center gap-2 justify-center"
            :class="item.color" @click="closeOrder = true"
         >
            <i :class="'flex ' + item.icon"></i>
            <span> {{ item.name }} </span>
         </button>
      </div>
   </div>
   <Transition name="slide-fade">
      <BasketCheckoutCard v-show="closeOrder" @close="(value) => closeOrder = value"  />
      </Transition>
</template>

<style>
body {
   overflow-x: hidden !important;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.5, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(200px);
  opacity: 0;
}
</style>
