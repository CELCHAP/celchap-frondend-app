<template>
  <div class="w-full min-h-screen bg-gray-50">
    <div class="w-full h-16 flex items-center justify-center pt-5">
      <h1 class="text-3xl text-custom-orange font-extrabold">Celchap.</h1>
    </div>

    <div class="mt-20">
      <div class="mt-10">
        <div class="bg-white w-11/12 sm:w-[500px] h-fit mx-auto border p-4 rounded-md shadow-xl">
          <h3 class="text-center text-xl text-black font-extrabold">Inscription</h3>

          <div class="mt-6">
            <div class="flex flex-col sm:flex-col items-center gap-x-3">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text text-gray-500 font-semibold">Nom complet</span>
                </label>
                <input type="text" placeholder="N'da Adams Aimé-Désiré"
                  class="font-medium input input-bordered w-full rounded-md" v-model="fields.fullname" />
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Numéro de téléphone</span>
              </label>
              <div class="flex items-center gap-x-3">
                <select class="select select-bordered font-medium rounded-md w-28" v-model="fields.indicatif">
                  <option value="" disabled selected>Choisir un indicatif</option>
                  <option value="+225">+225 (Côte d'Ivoire)</option>
                  <option value="+237">+237 (Cameroun)</option>
                  <option value="+241">+241 (Gabon)</option>
                </select>
                <input type="phone" placeholder="0778812111" class="font-medium input input-bordered w-full rounded-md"
                  v-model="fields.phone" />
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Email</span>
              </label>
              <input type="email" placeholder="email@gmail.com" class="font-medium input input-bordered w-full rounded-md"
                v-model="fields.email" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Lieu de résidence</span>
              </label>
              <input type="text" placeholder="Cocody Rivera" class="font-medium input input-bordered w-full rounded-md"
                v-model="fields.localisation" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Mot de passe</span>
              </label>
              <input type="password" placeholder="******" class="font-medium input input-bordered w-full rounded-md"
                v-model="fields.password" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Photo de profil</span>
              </label>
              <div class="w-12 h-12 mx-auto rounded-full border border-2 flex items-center justify-center">
                <vue-feather stroke-width="2.2" type="user" size="18"></vue-feather>
                <img v-if="fields.image" :src="filePreview(fields.image)" alt=""
                  class="object-cover w-full h-full rounded-full">
              </div>
              <div
                class="mt-2 w-full h-11 rounded-md border border-gray-300 flex items-center justify-center cursor-pointer"
                @click="choosefile">
                <span class="text-xs font-bold">Sélectionner une photo</span>
              </div>
              <input type="file" id="file-input-btn" accept="image/jpg, image/jpeg, image/png" hidden
                @change="onFileChange" />
            </div>


            <div class="mt-6 mb-1">
              <button :disabled="isLogging"
                class="inscription bg-black text-white font-extrabold w-full h-11 rounded-md shadow-md flex items-center justify-center"
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
import { useRouter } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';
import { signUp } from './../../services/auth/AuthRequest'

const router = useRouter()

const isLogging = ref(false)
const errorMessage = ref("")

const fields = ref({
  fullname: '',
  indicatif: '',
  phone: '',
  localisation: '',
  email: '',
  password: '',
  image: '',
  role: 'vendeur'
})

const choosefile = () => {
  document.getElementById('file-input-btn').click()
}

const onFileChange = (e) => {
  if (e.target.files[0]) {
    fields.value.image = e.target.files[0]
  }
}

const filePreview = (file) => {
  return file ? URL.createObjectURL(file) : ""
}

const createAccount = () => {
  isLogging.value = true

  const formData = new FormData();

  for (const key in fields.value) {
    formData.append(key, fields.value[key]);
  }

  try {
    signUp(formData).then((res) => {
      isLogging.value = false
      localStorage.setItem("access", res.data.access_token)
      router.push({ path: 'nouvelle-boutique', replace: true })
      localStorage.setItem('fullname', res.data.user.fullname)
      localStorage.setItem('indicatif', res.data.user.indicatif)
      localStorage.setItem('phone', res.data.user.phone)
    }).catch(err => {
      console.log(err)
      if (err.code === "ERR_NETWORK") {
        errorMessage.value = "Vérifiez votre connexion internet et rééssayez !"
      } else {
        errorMessage.value = "Une erreur s'est produite, rééssayez !"
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