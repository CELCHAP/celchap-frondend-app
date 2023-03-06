<template>
  <div>
    <div class="relative w-24 h-24 mx-auto rounded-full bg-gray-200 flex item-center justify-center">
      <img :src="filePreview(file)" alt="" class="object-cover w-full h-full rounded-full">
      <button class="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center"
        @click="removeFile()">
        <vue-feather type="x" size="14"></vue-feather>
      </button>
    </div>
    <input type="file" id="file-input-btn" accept="image/jpg, image/jpeg, image/png" hidden @change="onFileChange" />
    <div class="flex items-center justify-center">
      <button @click="choosefile" class="text-sm text-gray-500 font-bold mt-3">Choisir une photo</button>
    </div>

    <div class="column-action modal-action pt-5">
      <button :disabled="isLoadingUpdate"
        class="bg-gray-300 w-1/2 h-10 flex items-center justify-center rounded-md text-sm sm:text-base text-black font-bold"
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
  boutiqueInfo: Object,
});

const { boutiqueInfo } = toRefs(props)

const isLoadingUpdate = ref(false)
const file = ref("")
const boutiqueFields = ref({
  title: '',
  category: '',
  description: '',
  prix: '',
  prix_promo: '',
  stock: '',
  images: []
})

watch(boutiqueInfo, () => {

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
}
</script>

<style></style>