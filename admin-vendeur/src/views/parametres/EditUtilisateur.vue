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
            <span class="label-text text-sm sm:text-base font-semibold">Nom</span>
          </label>
          <input type="text" placeholder="N'da" class="input input-bordered w-full font-medium rounded-md" />
        </div>

        <div class="form-control w-full mt-2">
          <label class="label">
            <span class="label-text text-sm sm:text-base font-semibold">Prénoms</span>
          </label>
          <input type="text" placeholder="Adams Aimé-Désiré" class="input input-bordered w-full font-medium rounded-md" />
        </div>
      </div>

      <div class="form-control w-full mt-2">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Numéro de téléphone</span>
        </label>
        <input type="text" placeholder="0778812111" class="input input-bordered w-full font-medium rounded-md" />
      </div>
      
      <div class="form-control w-full mt-2">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Email</span>
        </label>
        <input type="text" placeholder="ad.aimedesire@gmail.com" class="input input-bordered w-full font-medium rounded-md" />
      </div>
      
      <div class="form-control w-full mt-2">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Lieu d'habitation</span>
        </label>
        <input type="text" placeholder="Cocody" class="input input-bordered w-full font-medium rounded-md" />
      </div>
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
import { watch, ref, toRefs } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';

const props = defineProps({
  utilisateurInfo: Object,
});

const { utilisateurInfo } = toRefs(props)

const isLoadingUpdate = ref(false)
const file = ref("")
const utilisateurFields = ref({
  nom: '',
  prenoms: '',
  telephone: '',
  email: '',
  residence: '',
  photo: '',
})

watch(utilisateurInfo, () => {

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
  document.getElementById('edit-utilisateur').click()
}

const saveModification = () => {
  isLoadingUpdate.value = true
}
</script>

<style></style>