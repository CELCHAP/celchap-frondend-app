<template>
  <div class="w-full min-h-screen bg-gray-50">
    <div class="w-full h-16 flex items-center justify-center pt-5">
      <h1 class="text-3xl text-custom-orange font-extrabold">Celchap.</h1>
    </div>

    <div class="mt-20">
      <div class="mt-10">
        <div class="bg-white w-11/12 sm:w-[420px] h-fit mx-auto border p-4 rounded-md shadow-xl">
          <h3 class="text-center text-xl text-black font-extrabold">Connexion</h3>

          <div class="mt-6">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Téléphone</span>
              </label>
              <input type="text" placeholder="0778812111" class="font-medium input input-bordered w-full rounded-md"
                v-model="username" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Mot de passe</span>
              </label>
              <input type="password" placeholder="******" class="font-medium input input-bordered w-full rounded-md"
                v-model="password" />
              <p class="text-sm text-gray-500 text-right underline font-semibold">Mot de passe oublié</p>
            </div>
            <div class="mt-6 mb-1">
              <button :disabled="isLogging"
                class="bg-black text-white font-extrabold w-full h-11 rounded-md shadow-md flex items-center justify-center"
                @click="loginUser">
                <ProgressSpinner v-if="isLogging" style="width:25px;height:25px" strokeWidth="5" fill="none"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                <span v-if="!isLogging">Se connecter</span>
              </button>
            </div>
            <div v-if="errorMessage" class="mt-3">
              <p class="text-sm text-center text-red-500 font-semibold">{{ errorMessage}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <p class="text-center font-semibold">Pas encore de compte ? <router-link to="/inscription">
            <button class="text-custom-orange underline font-extrabold">S'inscrire</button>
          </router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';
import { signIn } from './../../services/auth/AuthRequest'

const router = useRouter()

const isLogging = ref(false)
const username = ref("")
const password = ref("")
const errorMessage = ref("")

// fonction de connexion
const loginUser = () => {
  isLogging.value = true
  errorMessage.value = ""

  const data = {
    phone: username.value,
    password: password.value
  }

  try {
    signIn(data).then((res) => {
      isLogging.value = false
      localStorage.setItem("access", res.data.access_token)
      if (!res.data.user.boutique_id) {
        router.push({ path:'nouvelle-boutique', replace: true })
        localStorage.setItem('fullname', res.data.user.fullname)
        localStorage.setItem('indicatif', res.data.user.indicatif)
        localStorage.setItem('phone', res.data.user.phone)
      } else {
        localStorage.setItem('category', res.data.user.boutique_id)
        localStorage.setItem('store', res.data.user.boutique_id)
        localStorage.setItem('fullname', res.data.user.fullname)
        localStorage.setItem('indicatif', res.data.user.indicatif)
        localStorage.setItem('phone', res.data.user.phone)
        router.push({ path: 'dashboard' })
      }
    }).catch(err => {
      console.log(err)
      if (err.code === "ERR_NETWORK") {
        errorMessage.value = "Vérifiez votre connexion internet et rééssayez !"
      } else {
        errorMessage.value = err.response.data.message
      }
      isLogging.value = false
    })
  } catch (error) {
    console.log('catch error', err)
    isLogging.value = false
  }
}
</script>

<style>
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