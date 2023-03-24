<template>
  <div class="w-full min-h-screen bg-gray-50">
    <div class="w-full h-fit flex flex-col items-center justify-center pt-5">
      <h1 class="text-3xl text-custom-orange font-extrabold">Celchap.</h1>
    </div>

    <div class="mt-20 pb-28">
      <div class="mt-10">
        <div class="bg-white w-11/12 sm:w-[500px] h-fit mx-auto border p-4 rounded-md shadow-xl">
          <h3 class="text-center text-xl text-black font-extrabold">Créez votre première boutique</h3>

          <div class="mt-10">
            <div class="flex flex-col sm:flex-col items-center gap-x-3">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text text-gray-500 font-semibold">Nom de la boutique</span>
                </label>
                <input type="text" placeholder="N'da Adams Aimé-Désiré"
                  class="font-medium input input-bordered w-full rounded-md" v-model="fields.name" />
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Catégorie</span>
              </label>
              <select class="select select-bordered font-medium rounded-md" v-model="fields.category">
                <option value="" disabled selected>Choisir une catégorie</option>
                <option v-for="(item, index) in listeCategorie" :key="index" :value="item.id">{{ item.name }}</option>
              </select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Numéro de la boutique</span>
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
                <span class="label-text text-gray-500 font-semibold">Description de la boutique</span>
              </label>
              <textarea type="text" placeholder="Parlez un peu de votre boutique"
                class="font-medium input input-bordered w-full rounded- py-1.5 h-32"
                v-model="fields.description"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text text-gray-500 font-semibold">Photo de profil de la boutique</span>
              </label>
              <div class="w-12 h-12 mx-auto rounded-full border border-2 flex items-center justify-center">
                <vue-feather stroke-width="2.2" type="shopping-bag" size="18"></vue-feather>
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
              <button :disabled="isLoading"
                class="bg-black text-white font-extrabold w-full h-11 rounded-md shadow-md flex items-center justify-center"
                @click="createNewStore">
                <ProgressSpinner v-if="isLoading" style="width:25px;height:25px" strokeWidth="5" fill="none"
                  animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                <span v-if="!isLoading">Démarrer</span>
              </button>
            </div>
            <div v-if="errorMessage" class="mt-3">
              <p class="text-sm text-center text-red-500 font-semibold">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';
import { getUserAndStoreConnected } from '../../services/utilisateur/UtilisateurRequest'
import { getCategories } from '../../services/categorie/CategorieRequest'
import { createNewUserStore } from '../../services/boutique/BoutiqueRequest';

const router = useRouter()

const isLoading = ref(false)
const errorMessage = ref("")
const userInfo = ref(null)
const listeCategorie = ref([])

const fields = ref({
  name: '',
  indicatif: '',
  phone: '',
  devise: 'FCFA',
  description: '',
  category: '',
  image: ''
})

onMounted(() => {
  // Vérifie si l'utilisateur à déjà une boutique
  // Si 'OUI' redirige vers le dashboard
  // Si 'NON' crée la boutique
  if (localStorage.getItem('store')) {
    router.push({ path: 'dashboard', replace: true })
  } else {
    getUserAndStoreConnected().then(res => {
      userInfo.value = res.data.auth[0]
      if (userInfo.value.boutique_id !== null && userInfo.value.boutiques.length > 0) {
        localStorage.setItem('store', res.data.user.boutique_id)
        router.push({ path: 'dashboard', replace: true })
      }
    }).catch(err => console.log(err))
  }

  getCategories().then(res => {
    listeCategorie.value = res.data.categorie

  }).catch(err => console.log(err))
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

const createNewStore = () => {
  isLoading.value = true
  errorMessage.value = ""

  try {
    createNewUserStore(fields.value).then((res) => {
      isLoading.value = false
      router.push({ path: 'dashboard', replace: true })
      localStorage.setItem('category', res.data.boutique.category_id)
      localStorage.setItem('store', res.data.boutique.id)
    }).catch(err => {
      console.log(err)
      if (err.code === "ERR_NETWORK") {
        errorMessage.value = "Vérifiez votre connexion internet et rééssayez"
      } else {
        errorMessage.value = err.response.data.message
      }
      isLoading.value = false
    })
  } catch (error) {
    console.log('catch error', err)
    isLoading.value = false
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