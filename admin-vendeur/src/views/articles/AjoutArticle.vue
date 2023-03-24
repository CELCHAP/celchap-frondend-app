<template>
  <div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text text-sm sm:text-base font-semibold">Nom</span>
      </label>
      <input type="text" placeholder="Sac à main GUCCI" class="input input-bordered w-full font-medium rounded-md"
        v-model="articleDataField.name" />
    </div>

    <div class="column flex items-center gap-x-4">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Catégorie</span>
        </label>
        <select class="select select-bordered font-medium rounded-md" v-model="articleDataField.category"
          @change="() => updateListeSousCategorie(articleDataField.category)">
          <option value="" disabled selected>Choisir une catégorie</option>
          <option :value="item.id" v-for="(item, index) in listeCategorie" :key="index">{{ item.name }}</option>
        </select>
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Sous-catégorie</span>
        </label>
        <select :disabled="articleDataField.category === ''" class="select select-bordered font-medium rounded-md"
          v-model="articleDataField.sous_category">
          <option value="" disabled selected>Choisir une sous-catégorie</option>
          <option :value="item.id" v-for="(item, index) in listeSousCategorieParCategorie" :key="index">{{ item.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Editeur de text -->
    <div class="mt-2">
      <label class="label">
        <span class="text-sm sm:text-base font-semibold">Description de l'article</span>
      </label>
      <div class="bg-white rounded-md border p-2">
        <div v-if="editor" class="flex flex-wrap gap-y-1 gap-x-2 border-b pb-3">
          <button class="bg-gray-100 font-medium text-sm text-gray-500 px-2 pt-1 rounded-md"
            @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }">
            <vue-feather type="bold" size="18"></vue-feather>
          </button>
          <button class="bg-gray-100 font-medium text-sm text-gray-500 px-2 pt-1 rounded-md"
            @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }">
            <vue-feather type="italic" size="18"></vue-feather>
          </button>
          <button class="bg-gray-100 font-medium text-sm text-gray-500 px-2 pt-1 rounded-md"
            @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }">
            <span class="line-through text-gray-500 uppercase text-xl font-normal leading-3">O</span>
          </button>
          <button class="bg-gray-100 font-medium text-sm text-gray-500 px-2 pt-1 rounded-md"
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }">
            <vue-feather type="list" size="18"></vue-feather>
          </button>
          <button class="bg-gray-100 font-medium text-sm text-gray-500 px-2 pt-1 rounded-md"
            @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
            <vue-feather type="corner-up-left" size="18"></vue-feather>
          </button>
          <button class="bg-gray-100 font-medium text-sm text-gray-500 px-2 pt-1 rounded-md"
            @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
            <vue-feather type="corner-up-right" size="18"></vue-feather>
          </button>
        </div>
        <editor-content :editor="editor" />
      </div>
    </div>
    <!-- Fin editeur de texte -->

    <div class="column flex items-center gap-x-4 mt-2">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Prix de vente (FCFA)</span>
        </label>
        <input type="text" placeholder="45000" class="input input-bordered w-full font-medium rounded-md"
          v-model="articleDataField.prix_vendeur" />
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-sm sm:text-base font-semibold">Disponibilité</span>
        </label>
        <select class="select select-bordered font-medium rounded-md" v-model="articleDataField.disponibilite">
          <option value="" disabled selected>Choisir une disponibilité</option>
          <option value="DISPONIBLE">Disponible</option>
          <option value="INDISPONIBLE">Indisponible</option>
        </select>
      </div>
    </div>

    <div class="mt-3">
      <p class="text-sm sm:text-base font-semibold mt-1">Photos de l'articles</p>
      <div
        class="bg-white rounded-md h-28 w-full mt-2 border-2 border-dashed flex items-center justify-start gap-x-3 p-2">

        <div v-for="(item, index) in files" :key="index"
          class="relative bg-gray-100 w-28 h-full rounded-md shadow-sm border flex flex-col items-center justify-center cursor-pointer">
          <button
            class="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center"
            @click="removeFile(index)">
            <vue-feather type="x" size="14"></vue-feather>
          </button>
          <img :src="filePreview(item)" alt="" class="object-contain">
        </div>

        <div v-if="files.length < 6"
          class="bg-gray-100 w-28 h-full rounded-md shadow-sm border flex flex-col items-center justify-center cursor-pointer"
          @click="choosefile">
          <vue-feather type="image"></vue-feather>
          <p class="text-xs text-gray-600 font-semibold">Choisir un fichier</p>
        </div>

        <input type="file" id="file-input-btn" accept="image/jpg, image/jpeg, image/png" hidden @change="onFileChange" />
      </div>
    </div>

    <div class="column-action modal-action pt-5">
      <button :disabled="isLoading"
        class="bg-neutral-800 w-1/2 h-10 flex items-center justify-center rounded-md text-sm sm:text-base text-white font-bold"
        @click="closeModal">Annuler</button>

      <button :disabled="isLoading"
        class="custom-btn bg-custom-orange w-1/2 h-10 flex items-center justify-center rounded-md font-bold text-sm sm:text-base text-white"
        @click="saveArticle">
        <ProgressSpinner v-if="isLoading" style="width:25px;height:25px" strokeWidth="5" fill="none"
          animationDuration=".5s" aria-label="Custom ProgressSpinner" />
        <span v-if="!isLoading">{{ article_Detail.nom ? 'Modifier' : 'Enregistrer' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, toRefs, defineEmits } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3'
import ProgressSpinner from 'primevue/progressspinner';
import StarterKit from '@tiptap/starter-kit'
import { useSnackbar } from "vue3-snackbar";
import { saveNewArticle } from '../../services/article/ArticleRequest';

const snackbar = useSnackbar();

const props = defineProps({
  article_Detail: Object,
  categorie: Object,
  sousCategorie: Object,
});

const { article_Detail, categorie, sousCategorie } = toRefs(props)
const emit = defineEmits(['reloadEvent']);

const editor = useEditor({
  content: '<p>Tapez une description ici</p><br>',
  // triggered on every change
  onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    articleDataField.value.description = html
  },
  extensions: [
    StarterKit,
  ],
})

const isLoading = ref(false)
const errorMessage = ref("")
const files = ref([])
const listeCategorie = ref([])
const listeSousCategorie = ref([])
const listeSousCategorieParCategorie = ref([])
const articleDataField = ref({
  name: '',
  category: '',
  sous_category: '',
  description: '',
  prix_vendeur: '',
  disponibilite: '',
  image: []
})

watch(article_Detail, () => {
  listeCategorie.value = categorie.value
  listeSousCategorie.value = sousCategorie.value
  articleDataField.value.name = article_Detail.value.name
  articleDataField.value.prix_vendeur = article_Detail.value.prix_vendeur
  articleDataField.value.category = article_Detail.value.category
  articleDataField.value.sous_category = article_Detail.value.sous_category
  articleDataField.value.description = article_Detail.value.description
  articleDataField.value.disponibilite = article_Detail.value.disponibilite
})

const updateListeSousCategorie = (categorieId) => {
  listeSousCategorieParCategorie.value = []
  listeSousCategorie.value.forEach(element => {
    if (element.category_id === categorieId) {
      listeSousCategorieParCategorie.value.push(element)
    }
  });
}

const choosefile = () => {
  document.getElementById('file-input-btn').click()
}

const onFileChange = (e) => {
  if (e.target.files[0] && !files.value.includes(e.target.files[0])) {
    files.value.push(e.target.files[0])
    articleDataField.value.image.push(e.target.files[0])
  }
}

const removeFile = (index) => {
  if (index > -1) {
    files.value.splice(index, 1);
  }
}

const filePreview = (file) => {
  return URL.createObjectURL(file)
}

function closeModal() {
  document.getElementById('edit-article').click()
}

const saveArticle = () => {
  isLoading.value = true

  try {
    saveNewArticle(articleDataField.value).then((res) => {
      isLoading.value = false
      emit('reloadEvent', 'Hello from child component');
      closeModal()
      articleDataField.value = {
        name: '',
        category: '',
        sous_category: '',
        description: '',
        prix_vendeur: '',
        disponibilite: '',
        image: []
      }
      files.value = []
      listeSousCategorieParCategorie.value = []
      snackbar.add({
        type: 'error',
        text: "Article enregistré avec succès",
        dismissible: true,
        background: "#10b981"
      })
    }).catch(err => {
      console.log(err)
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

<style>
.is-active {
  background-color: #ffc100;
  color: rgb(37, 37, 37);
}

.is-active .vue-feather svg,
.is-active span {
  stroke: black !important;
  color: black !important;
}
</style>