<template>
  <GridLayout>
    <div class="w-full bg-white rounded-md fixed top-16">
      <TabMenu :model="items" />
    </div>
    <div class="mt-12 px-5 pt-5">
      <router-view></router-view>
    </div>
  </GridLayout>
</template>

<script setup>
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu/sfc';
import GridLayout from '../../layouts/GridLayout.vue';

const active = ref(3);

const items = ref([
  {
    label: 'Boutique',
    icon: 'pi pi-fw pi-shopping-bag',
    to: '/parametres/boutique'
  },
  {
    label: 'Compte',
    icon: 'pi pi-fw pi-user',
    to: '/parametres/compte'
  }
]);
</script>

<style>
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
  font-weight: 600;
  color: #000;
  font-size: 14px;
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
  color: #facc15 !important;
  border-color: #facc15 !important;
  font-weight: 600;
  background-color: #262626;
  border-radius: 0 !important;
  font-size: 14px;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus {
  box-shadow: none !important;
}
</style>