<template>
  <div class="bg-gray-50">
    <div class="parent min-h-screen">
      <aside class="div1 relative h-full bg-white border-r">
        <div class="w-full h-16 px-8 flex items-center justify-center">
          <h1 class="text-3xl text-custom-orange text-center font-extrabold">Celchap.</h1>
        </div>
        <div class="mt-10">
          <router-link to="/paremetres/compte">
            <div class="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
              <vue-feather size="30" stroke-width="2.1" type="user"></vue-feather>
            </div>
          </router-link>
          <div class="mt-3 px-4">
            <router-link to="/parametres/compte">
              <p class="text-center text-black text-sm lg:text-base font-semibold">{{ userName }}</p>
            </router-link>
            <p class="text-center text-gray-400 text-sm lg:text-base font-medium">{{ indicatif }} {{ phone }}</p>
          </div>
        </div>
        <div class="px-4 mt-14 relative">
          <router-link to="/dashboard">
            <div
              class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
              <vue-feather size="22" stroke-width="2.1" type="home"></vue-feather>
              <p class="text-base font-semibold">Dashboard</p>
            </div>
          </router-link>
          <router-link to="/articles">
            <div
              class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
              <vue-feather size="22" stroke-width="2.1" type="package"></vue-feather>
              <p class="text-base font-semibold">Mes articles</p>
            </div>
          </router-link>
          <router-link to="/commandes">
            <div
              class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
              <vue-feather size="22" stroke-width="2.1" type="shopping-bag"></vue-feather>
              <p class="text-base font-semibold">Mes commandes</p>
            </div>
          </router-link>
          <router-link to="/parametres">
            <div
              class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
              <vue-feather size="22" stroke-width="2.1" type="settings"></vue-feather>
              <p class="text-base font-semibold">Paramètre</p>
            </div>
          </router-link>
        </div>
        <div class="absolute w-full bottom-5 px-4 flex items-center justify-center">
          <div
            class="w-full bg-black text-white shadow-lg rounded-md px-6 h-10 flex items-center justify-center gap-x-2 mt-3 cursor-pointer"
            @click="deconnexion">
            <ProgressSpinner v-if="isLoggingOut" style="width:25px;height:25px" strokeWidth="5" fill="none"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            <vue-feather v-if="!isLoggingOut" size="20" stroke-width="2.1" type="log-out"></vue-feather>
            <p v-if="!isLoggingOut" class="text-sm font-semibold">Déconnexion</p>
          </div>
        </div>
      </aside>

      <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">
        <aside class="relative h-full bg-white">
          <!-- <div class="w-full h-16 px-8 flex items-center justify-center">
            <h1 class="text-3xl text-custom-orange text-center font-extrabold">Celchap.</h1>
          </div> -->
          <div class="mt-">
            <router-link to="/parametres/compte">
              <div class="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                <vue-feather size="30" stroke-width="2.1" type="user"></vue-feather>
              </div>
            </router-link>
            <div class="mt-3 px-4">
              <router-link to="/parametres/compte">
                <p class="text-center text-black text-sm lg:text-base font-semibold">{{ userName }}</p>
              </router-link>
              <p class="text-center text-gray-400 text-sm lg:text-base font-medium">{{ indicatif }} {{ phone }}</p>
            </div>
          </div>
          <div class="px-4 mt-10 relative h-96">
            <router-link to="/dashboard">
              <div
                class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
                <vue-feather size="22" stroke-width="2.1" type="home"></vue-feather>
                <p class="text-base font-semibold">Dashboard</p>
              </div>
            </router-link>
            <router-link to="/articles">
              <div
                class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
                <vue-feather size="22" stroke-width="2.1" type="package"></vue-feather>
                <p class="text-base font-semibold">Mes articles</p>
              </div>
            </router-link>
            <router-link to="/commandes">
              <div
                class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
                <vue-feather size="22" stroke-width="2.1" type="shopping-bag"></vue-feather>
                <p class="text-base font-semibold">Mes commandes</p>
              </div>
            </router-link>
            <router-link to="/parametres">
              <div
                class="hover:bg-orange-50 hover:text-orange-400 text-gray-800 hover:shadow-sm hover:shadow-custom-orange/10 rounded-md px-4 h-11 flex items-center gap-x-2 mt-3 cursor-pointer">
                <vue-feather size="22" stroke-width="2.1" type="settings"></vue-feather>
                <p class="text-base font-semibold">Paramètre</p>
              </div>
            </router-link>
          </div>
          <div class="absolute w-full bottom-5 px-4 flex items-center justify-center">
            <div
              class="w-full bg-black text-white shadow-lg rounded-md px-6 h-11 flex items-center justify-center gap-x-2 mt-3 cursor-pointer"
              @click="deconnexion">
              <ProgressSpinner v-if="isLoggingOut" style="width:25px;height:25px" strokeWidth="5" fill="none"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
              <vue-feather v-if="!isLoggingOut" size="20" stroke-width="2.1" type="log-out"></vue-feather>
              <p v-if="!isLoggingOut" class="text-sm font-semibold">Déconnexion</p>
            </div>
          </div>
        </aside>
      </Sidebar>

      <header class="div2 sticky top-0 w-full bg-white h-16 border-b px-5 flex items-center justify-between z-50">
        <router-link to="/dashboard">
          <div class="h-full flex lg:hidden items-center">
            <h1 class="text-2xl font-extrabold text-custom-orange">Celchap.</h1>
          </div>
        </router-link>
        <div class="h-full flex lg:hidden items-center">
          <button icon="pi pi-arrow-right" @click="visibleLeft = true" class="flex items-center justify-center">
            <vue-feather size="30" stroke-width="2.1" type="menu"></vue-feather>
          </button>
        </div>
      </header>

      <main class="div3 bg-gray-50">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';
import Sidebar from 'primevue/sidebar/sfc';
import { logout } from './../services/auth/AuthRequest'

const router = useRouter()

const visibleLeft = ref(false);
const isLoggingOut = ref(false)
const errorMessage = ref("")
const userName = ref("")
const indicatif = ref("")
const phone = ref("")

onMounted(() => {
  userName.value = localStorage.getItem('fullname')
  indicatif.value = localStorage.getItem('indicatif')
  phone.value = localStorage.getItem('phone')
})

const deconnexion = () => {
  try {
    isLoggingOut.value = true

    logout().then((res) => {
      isLoggingOut.value = false
      localStorage.clear()
      router.push({ path: 'connexion', replace: true })
    }).catch(err => {
      console.log(err)
      if (err.code === "ERR_NETWORK") {
        errorMessage.value = "Vérifiez votre connexion internet et rééssayez !"
      } else {
        errorMessage.value = err.response.data.message
      }
      isLoggingOut.value = false
    })
  } catch (error) {
    isLoggingOut.value = false
    console.log('err catch', error)
  }
}
</script>

<style scoped>
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

@media screen and (max-width: 1024px) {
  .parent {
    display: block;
  }

  .div1 {
    position: absolute;
    width: 300px;
    transform: translate(-300px);
  }

  .div2 {
    grid-area: 1 / 3 / 2 / 12;
  }

  .div3 {
    grid-area: 2 / 3 / 12 / 12;
  }
}

.cellchap-active-link div {
  background-color: #fff7ed;
  color: #f97316;
}

.cellchap-active-link div p {
  font-weight: 700 !important;
}

@keyframes p-progress-spinner-color {

  100%,
  0% {
    stroke: #fff;
  }

  40% {
    stroke: #fff;
  }

  66% {
    stroke: #fff;
  }

  80%,
  90% {
    stroke: #fff;
  }
}
</style>