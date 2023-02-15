<script setup>
import { getCurrentInstance } from 'vue'

const internalInstance = getCurrentInstance();

internalInstance.appContext.config.globalProperties.$router.beforeEach((to, from) => {
  internalInstance.appContext.config.globalProperties.$Progress.start()
});

internalInstance.appContext.config.globalProperties.$router.afterEach((to, from) => {
  internalInstance.appContext.config.globalProperties.$Progress.finish()
});
</script>

<template>
  <RouterView />
  <vue-progress-bar></vue-progress-bar>
</template>

<style scoped>

</style>
