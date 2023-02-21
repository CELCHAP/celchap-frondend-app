<template>
  <div class="w-full min-h-screen bg-gray-50">
    <div class="w-full h-16 flex items-center justify-center">
      <h1 class="text-3xl text-custom-orange font-extrabold">Celchap.</h1>
    </div>

    <div class="mt-20">
      <div class="mt-10">
        <div class="bg-white w-11/12 sm:w-[550px] h-fit mx-auto border p-4 rounded-md shadow-xl">
          <h3 class="text-center text-xl text-black font-extrabold">Inscription</h3>

          <div class="mt-6">
            <div class="flex flex-col sm:flex-row items-center gap-x-3">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text text-gray-500 font-semibold">Nom</span>
                </label>
                <input type="text" placeholder="N'da" class="font-medium input input-bordered w-full rounded-md" v-model="nom" />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text text-gray-500 font-semibold">Prénoms</span>
                </label>
                <input type="text" placeholder="Adams Aimé-Désiré"
                  class="font-medium input input-bordered w-full rounded-md" v-model="prenoms" />
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Numéro de téléphone</span>
              </label>
              <input type="phone" placeholder="+2250778812111" class="font-medium input input-bordered w-full rounded-md" v-model="telephone" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Email</span>
              </label>
              <input type="email" placeholder="email@gmail.com" class="font-medium input input-bordered w-full rounded-md" v-model="email" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Mot de passe</span>
              </label>
              <input type="password" placeholder="******" class="font-medium input input-bordered w-full rounded-md" v-model="password" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Nom de votre boutique</span>
              </label>
              <input type="password" placeholder="Celchap compagny" class="font-medium input input-bordered w-full rounded-md" v-model="storeName" />
            </div>
            <div class="mt-6 mb-1">
              <button :disabled="isLogging"
                class="bg-black text-white font-extrabold w-full h-11 rounded-md shadow-md flex items-center justify-center"
                @click="createAccount">
                <ProgressSpinner v-if="isLogging" style="width:25px;height:25px" strokeWidth="5" fill="none"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                <span v-if="!isLogging">Je m'inscris</span>
              </button>
            </div>
            <div v-if="errorMessage" class="mt-3">
              <p class="text-sm text-center text-red-500 font-semibold">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 pb-20">
        <p class="text-center font-semibold">Déjà un compte ? <router-link to="/connexion">
            <button class="text-custom-orange underline font-extrabold">Se connecter</button>
          </router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';
import { signUp } from './../../services/auth/AuthRequest'

const isLogging = ref(false)
const nom = ref("")
const prenoms = ref("")
const telephone = ref("")
const email = ref("")
const password = ref("")
const storeName = ref("")
const errorMessage = ref("")

const createAccount = () => {
  isLogging.value = true

  const data = {
    nom: nom,
    prenoms: prenoms,
    telephone: telephone,
    email: email,
    password: password,
    store: storeName
  }

  try {
    signUp(data).then((res) => {
      console.log(res)
      isLogging.value = false
    }).catch(err => {
      console.log(err)
      if (err.code === "ERR_NETWORK") {
        errorMessage.value = "Vérifiez votre connexion internet et rééssayez"
      }
      isLogging.value = false
    })
  } catch (error) {
    console.log('catch error', err)
    isLogging.value = false
  }
}
</script>

<style scoped></style>