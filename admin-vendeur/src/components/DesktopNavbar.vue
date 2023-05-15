<template>
  <div class="w-full h-16 bg-white shadow">
    <div class="w-9/12 max-w-9/12 h-full mx-auto flex items-center justify-between">
      <div>
        <h1 class="text-3xl text-custom-orange text-center font-extrabold">Celchap.</h1>
      </div>
      <div>
        <ul class="flex items-center gap-x-8">
          <li class="mx-2 px-2 cursor-pointer font-medium flex items-center gap-x-2">
            <vue-feather size="18" stroke-width="2.1" type="home"></vue-feather>
            <span>Dashboard</span>
          </li>
          <li class="mx-2 px-2 cursor-pointer font-medium flex items-center gap-x-2">
            <vue-feather size="18" stroke-width="2.1" type="package"></vue-feather>
            <span>Produits</span>
          </li>
          <li class="mx-2 px-2 cursor-pointer font-medium flex items-center gap-x-2">
            <vue-feather size="18" stroke-width="2.1" type="shopping-bag"></vue-feather>
            <span>Commandes</span>
          </li>
          <li class="mx-2 px-2 cursor-pointer font-medium flex items-center gap-x-2">
            <vue-feather size="18" stroke-width="2.1" type="settings"></vue-feather>
            <span>Paramètre</span>
          </li>
        </ul>
      </div>
      <div>
        <button class="bg-red-600 text-white font-medium w-36 h-9 rounded-full flex items-center justify-center gap-x-2">
          <vue-feather size="18" stroke-width="2.1" type="log-out"></vue-feather>
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  </div>
</template>


<script scoped>
</script>

<style scoped></style>