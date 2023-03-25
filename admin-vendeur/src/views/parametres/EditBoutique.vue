<template>
  <div>
    <div class="relative w-24 h-24 mx-auto rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
      <img v-if="file" :src="filePreview(file)" alt="" class="object-cover w-full h-full rounded-full">
      <vue-feather v-if="!file" type="image" size="30"></vue-feather>
      <button v-if="file"
        class="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center"
        @click="removeFile">
        <vue-feather type="x" size="14"></vue-feather>
      </button>
    </div>
    <input type="file" id="file-input-btn" accept="image/jpg, image/jpeg, image/png" hidden @change="onFileChange" />
    <div class="flex items-center justify-center">
      <button @click="choosefile" class="text-sm text-gray-500 font-bold mt-3">Choisir une photo</button>
    </div>

    <div class="mt-5">
      <div class="flex items-center gap-x-3">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text text-sm sm:text-base font-semibold">Nom de la boutique</span>
          </label>
          <input type="text" placeholder="My little market" class="input input-bordered w-full font-medium rounded-md"
            v-model="boutiqueFields.name" />
        </div>

        <div class="form-control w-full mt-2">
          <label class="label">
            <span class="label-text text-sm sm:text-base font-semibold">Catégorie de la boutique</span>
          </label>
          <select class="select select-bordered font-medium rounded-md" v-model="boutiqueFields.category">
            <option value="" disabled selected>Choisir une catégorie</option>
            <option v-for="(item, index) in listeCategorie" :key="index" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
      </div>

      <div class="form-control w-full mt-2">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Contact de la boutique</span>
        </label>
        <div class="flex items-center gap-x-4">
          <div class="w-44">
            <select class="w-44 select select-bordered font-medium rounded-md" v-model="boutiqueFields.indicatif">
              <option value="" disabled selected>Choisir un indicatif</option>
              <option value="+225">+225</option>
              <option value="+241">+241</option>
              <option value="+226">+226</option>
            </select>
          </div>
          <div class="w-full">
            <input type="text" placeholder="0778812111" class="input input-bordered w-full font-medium rounded-md"
              v-model="boutiqueFields.phone" />
          </div>
        </div>
      </div>

      <div class="form-control w-full mt-2">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Description de la boutique</span>
        </label>
        <textarea type="text" placeholder="0778812111"
          class="h-32 input input-bordered w-full font-medium rounded-md py-3"
          v-model="boutiqueFields.description"></textarea>
      </div>

      <!-- <div class="form-control w-full mt-2">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Lien des réseaux sociaux</span>
        </label>
        <div class="flex items-center gap-x-3">
          <div class="w-12 h-10 flex items-center justify-center bg-yellow-300 text-black rounded-md">
            <vue-feather stroke-width="1.5" type="facebook" size="21"></vue-feather>
          </div>
          <input type="text" placeholder="http://twitter.com/dams9ix" class="input input-bordered w-full font-medium rounded-md" />
        </div>
        <div class="flex items-center gap-x-3 mt-3">
          <div class="w-12 h-10 flex items-center justify-center bg-yellow-300 text-black rounded-md">
            <vue-feather stroke-width="1.5" type="instagram" size="21"></vue-feather>
          </div>
          <input type="text" placeholder="http://twitter.com/dams9ix" class="input input-bordered w-full font-medium rounded-md" />
        </div>
        <div class="flex items-center gap-x-3 mt-3">
          <div class="w-12 h-10 flex items-center justify-center bg-yellow-300 text-black rounded-md">
            <vue-feather stroke-width="1.5" type="twitter" size="21"></vue-feather>
          </div>
          <input type="text" placeholder="http://twitter.com/dams9ix" class="input input-bordered w-full font-medium rounded-md" />
        </div>
      </div> -->
    </div>

    <div class="column-action modal-action pt-5">
      <button :disabled="isLoadingUpdate"
        class="bg-neutral-800 w-1/2 h-10 flex items-center justify-center rounded-md text-sm sm:text-base text-white font-bold"
        @click="closeModal">Annuler</button>

      <button :disabled="isLoadingUpdate"
        class="custom-btn bg-custom-orange w-1/2 h-10 flex items-center justify-center rounded-md font-bold text-sm sm:text-base text-white"
        @click="saveModification">
        <ProgressSpinner v-if="isLoadingUpdate" style="width:25px;height:25px" strokeWidth="5" fill="none"
          animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        <span v-if="!isLoadingUpdate">Modifier</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, toRefs, defineEmits } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';
import { useSnackbar } from "vue3-snackbar";
import { updateUserStore } from '../../services/boutique/boutiqueRequest'

const snackbar = useSnackbar();

const props = defineProps({
  boutiqueInfo: Object,
  categorie: Array,
});

const { boutiqueInfo, categorie } = toRefs(props)
const emit = defineEmits(['reloadEvent']);

const isLoadingUpdate = ref(false)
const isLoading = ref(false)
const file = ref("")
const errorMessage = ref("")
const listeCategorie = ref([])
const boutiqueFields = ref({
  id: "",
  name: '',
  category: '',
  description: '',
  indicatif: '',
  phone: '',
  devise: '',

  lienFacebook: '',
  lienInstagram: '',
  lienTwitter: '',
})

watch(boutiqueInfo, () => {
  listeCategorie.value = categorie.value
  boutiqueFields.value.id = boutiqueInfo.value.id,
  boutiqueFields.value.name = boutiqueInfo.value.name,
  boutiqueFields.value.devise = boutiqueInfo.value.devise,
  boutiqueFields.value.category = boutiqueInfo.value.category_id,
  boutiqueFields.value.description = boutiqueInfo.value.description,
  boutiqueFields.value.indicatif = boutiqueInfo.value.indicatif,
  boutiqueFields.value.phone = boutiqueInfo.value.phone
})

const choosefile = () => {
  document.getElementById('file-input-btn').click()
}

const onFileChange = (e) => {
  if (e.target.files[0]) {
    file.value = e.target.files[0]
  }
}

const removeFile = () => {
  file.value = ""
}

const filePreview = (file) => {
  return file ? URL.createObjectURL(file) : ""
}

const closeModal = () => {
  document.getElementById('edit-boutique').click()
}

const saveModification = () => {
  isLoadingUpdate.value = true

  const dataToUpdate = {
    ...boutiqueFields.value,
    image: file.value
  }

  try {
    updateUserStore(dataToUpdate).then((res) => {
      isLoading.value = false
      isLoadingUpdate.value = false
      emit('reloadEvent', 'Hello from child component');
      closeModal()
      boutiqueFields.value = {
        name: '',
        categorie: '',
        description: '',
        indicatif: '',
        phone: '',
        photo: '',
        lienFacebook: '',
        lienInstagram: '',
        lienTwitter: '',
      }
      files.value = []
      listeCategorie.value = []
      snackbar.add({
        type: 'error',
        text: "Boutique modifié avec succès",
        dismissible: true,
        background: "#10b981"
      })
    }).catch(err => {
      console.log(err)
      isLoadingUpdate.value = false
      if (err.code === "ERR_NETWORK") {
        errorMessage.value = "Vérifiez votre connexion internet et rééssayez"
      } else {
        errorMessage.value = err.response.data.message
      }
      isLoading.value = false
      snackbar.add({
        type: 'error',
        text: errorMessage.value,
        dismissible: true,
        background: "#ef4444"
      })
    })
  } catch (error) {
    console.log('catch error', err)
    isLoadingUpdate.value = false
    isLoading.value = false
    snackbar.add({
      type: 'error',
      text: "Une erreur s'est produite",
      dismissible: true,
      background: "#ef4444"
    })
  }
}
</script>

<style></style>