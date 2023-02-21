<template>
  <div class="bg-gray-50">
    <div class="parent min-h-screen">
      <aside class="div1 bg-white border-r">
        <div class="w-full h-16 px-8 flex items-center border-b">
          <h1 class="text-3xl text-custom-orange text-cnter font-extrabold">Celchap.</h1>
        </div>
        <div class="px-4 mt-10">
          <div class="hover:bg-custom-orange hover:text-white hover:shadow-sm hover:shadow-custom-orange/20 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
            <vue-feather type="home"></vue-feather>
            <p class="text-lg font-bold">Dashboard</p>
          </div>
          <div class="hover:bg-custom-orange hover:text-white hover:shadow-sm hover:shadow-custom-orange/20 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
            <vue-feather type="package"></vue-feather>
            <p class="text-lg font-bold">Mes articles</p>
          </div>
          <div class="hover:bg-custom-orange hover:text-white hover:shadow-sm hover:shadow-custom-orange/20 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
            <vue-feather type="shopping-bag"></vue-feather>
            <p class="text-lg font-bold">Mes commandes</p>
          </div>
          <div class="hover:bg-custom-orange hover:text-white hover:shadow-sm hover:shadow-custom-orange/20 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
            <vue-feather type="settings"></vue-feather>
            <p class="text-lg font-bold">Paramètre</p>
          </div>
        </div>
      </aside>
      <header class="div2 bg-white h-16 border-b"> </header>
      <main class="div3 bg-gray-50">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.parent {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 12 / 3;
}

.div2 {
  grid-area: 1 / 3 / 2 / 12;
}

.div3 {
  grid-area: 2 / 3 / 12 / 12;
}

@media screen and (max-width: 1240px) {
  .parent {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(11, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 {
    grid-area: 1 / 1 / 12 / 3;
  }

  .div2 {
    grid-area: 1 / 3 / 2 / 12;
  }

  .div3 {
    grid-area: 2 / 3 / 12 / 12;
  }
}
</style>