<template>
  <GridLayout>
    <div class="w-full px-5 pt-10 md:pt-10">
      <h1 class="text-3xl md:text-4xl text-black font-extrabold">Gestion des articles</h1>
      <p class="text-gray-700 text-sm sm:text-base font-medium mt-3">Enregistrer les articles qui apparaitront sur votre boutique</p>

      <!-- Filtre de recherche -->
      <div class="mt-16 flex items-center justify-between gap-x-5">
        <div class="dropdown block sm:hidden">
          <label tabindex="0">
            <button
              class="w-24 h-9 bg-sky-200 flex items-center justify-center gap-x-3 rounded-md text-gray-700 font-extrabold shadow-sm">
              <vue-feather size="18" stroke-width="2.1" type="filter"></vue-feather>
              <span class="text-xs sm:text-sm">Filtres</span>
            </button>
          </label>
          <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-64 mt-2 border">
            <input type="text" placeholder="Rechercher..."
              class="w-58 h-11 text-sm font-medium input input-bordered w-full max-w-xs" v-model="searchTerm" @input="onInput" />
            <select class="select-custom-height select select-bordered w-58 max-w-xs font-medium mt-2"
              v-model="categorieSelected">
              <option value="" disabled selected>Choisir une catégorie</option>
              <option :value="item" v-for="(item, index) in listeCategorie" :key="index">{{ item.name }}</option>
            </select>
          </div>
        </div>

        <div class="hidden sm:flex items-center gap-x-3">
          <input type="text" placeholder="Rechercher..."
            class="w-58 h-11 font-medium input input-bordered w-full max-w-xs" v-model="searchTerm" @input="onInput" />

          <select class="select-custom-height select select-bordered w-58 max-w-xs font-medium"
            v-model="categorieSelected">
            <option value="" disabled selected>Choisir une catégorie</option>
            <option :value="item" v-for="(item, index) in listeCategorie" :key="index">{{ item.name }}</option>
          </select>
        </div>
        <div>
          <button class="bg-custom-orange w-32 sm:w-36 h-10 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md"
            @click="() => openModalEditArticle('')">Ajouter un article</button>
        </div>
      </div>

      <div class="overflow-x-auto mt-5">
        <table class="table table-zebr w-full">
          <thead class="bg-stone-200">
            <tr>
              <th class="bg-stone-200 text-black font-extrabold"></th>
              <th class="bg-stone-200 text-xs sm:text-sm text-black font-extrabold">Nom</th>
              <th class="bg-stone-200 text-xs sm:text-sm text-black font-extrabold">catégorie</th>
              <th class="bg-stone-200 text-xs sm:text-sm text-black font-extrabold">Prix</th>
              <th class="bg-stone-200 text-xs sm:text-sm text-black font-extrabold">Disponibilité</th>
              <th class="bg-stone-200 text-xs sm:text-sm text-black font-extrabold">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!isLoading && listeArticles.length > 0" v-for="(item, index) in listeArticles" :key="index">
              <th class="text-black">{{ index + 1 }}</th>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.name }}</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ displayCategorie(item.category_id) }}</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.prix_vendeur }} FCFA</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">{{ item.disponibilite }}</td>
              <td class="text-gray-600 text-sm sm:text-base font-medium">
                <div class="flex items-center gap-x-3">
                  <router-link :to="'/articles/detail/' + item.name">
                    <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md">
                      <vue-feather size="18" stroke-width="2.1" type="eye"></vue-feather>
                    </button>
                  </router-link>
                  <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md"
                    @click="() => openModalEditArticle(item)">
                    <vue-feather size="18" stroke-width="2.1" type="edit-2"></vue-feather>
                  </button>
                  <button class="bg-gray-100 w-8 h-8 flex items-center justify-center text-black rounded-md"
                    @click="() => alertDelete(item.id)">
                    <vue-feather size="18" stroke-width="2.1" type="trash-2"></vue-feather>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="!isLoading && listeArticles.length === 0">
              <td colspan="6">
                <div class="w-full h-32 text-red-500 flex items-center justify-center gap-x-2">
                  <vue-feather size="20" stroke-width="2.1" type="alert-circle"></vue-feather>
                  <p class="text-red-500 text-sm sm:text-base md:text-lg font-semibold">Aucun article trouvé.</p>
                </div>
              </td>
            </tr>
            <tr v-if="isLoading && listeArticles.length === 0">
              <td colspan="6">
                <div class="w-full h-32 text-red-500 flex flex-col items-center justify-center gap-x-2">
                  <ProgressSpinner v-if="isLoading" style="width:25px;height:25px" strokeWidth="5" fill="none"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                  <p class="text-gray-600 text-sm sm:text-base md:text-lg font-semibold">chargement...</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <!-- Modal de suppression d'article -->
      <input type="checkbox" id="modal-delete" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <div class="flex flex-col items-center text-red-500">
            <vue-feather size="25" stroke-width="2.1" type="alert-triangle"></vue-feather>
            <h3 class="font-bold text-lg text-center text-red-500">Supprimer cet article</h3>
          </div>
          <p class="py-4 text-center text-sm sm:text-base font-medium">Cet article sera supprimé de votre liste et
            ne sera plus afficher dans la boutique</p>

          <div class="modal-action justify-center">

            <button :disabled="isLoadingDelete" class="btn text-sm capitalize"
              @click="() => alertDelete('')">Annuler</button>

            <button :disabled="isLoadingDelete"
              class="btn-delete bg-red-500 flex items-center justify-center text-white text-sm font-semibold capitalize w-28 rounded-md"
              @click="deleteArticle">
              <ProgressSpinner v-if="isLoadingDelete" style="width:25px;height:25px" strokeWidth="5" fill="none"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" />
              <span v-if="!isLoadingDelete">Supprimer</span>
            </button>
          </div>
        </div>
      </div>


      <!-- Modal ajout ou modification d'article -->
      <input type="checkbox" id="edit-article" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-xl">
          <h3 v-if="!articleDetail.name" class="font-extrabold text-xl md:text-2xl text-custom-orange text-">Ajouter un
            article</h3>
          <h3 v-if="articleDetail.name" class="font-extrabold text-xl md:text-2xl text-custom-orange text-">Modifier cet
            article</h3>
          <div class="modal-ajout-article mt-10">
            <AjoutArticle :article_Detail="articleDetail" :categorie="listeCategorie" :sousCategorie="listeSousCategorie"
              @reloadEvent="handleReloadArticleListe" />
          </div>
        </div>
      </div>
    </div>



    <teleport to="body">
      <vue3-snackbar bottom :duration="4000" dense shadow></vue3-snackbar>
    </teleport>
  </GridLayout>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { debounce } from 'lodash';
import GridLayout from '../../layouts/GridLayout.vue';
import ProgressSpinner from 'primevue/progressspinner';
import AjoutArticle from './AjoutArticle.vue';
import { useSnackbar } from "vue3-snackbar";
import { getCategories, getSousCategories } from '../../services/categorie/CategorieRequest';
import { getArticlesListe, removeArticle, filtreArticleParCategorie, filtreArticleParNom } from '../../services/article/ArticleRequest';
const snackbar = useSnackbar();

const listeArticles = ref([
])
const searchTerm = ref("")
const categorieSelected = ref("")
const articleToDelete = ref("")
const articleDetail = ref({})
const listeCategorie = ref([])
const listeSousCategorie = ref([])
const isLoading = ref(false)
const isLoadingDelete = ref(false)

onMounted(() => {
  // Récupère la liste des articles enregistrés
  getArticlesListe().then(res => {
    listeArticles.value = res.data.produit
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible de récupérer les articles',
      dismissible: true,
      background: "#ef4444"
    })
  })

  // Récupère la liste des catégories
  getCategories().then(res => {
    listeCategorie.value = res.data.categorie
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible de récupérer les catégories',
      dismissible: true,
      background: "#ef4444"
    })
  })

  // Récupèrel la liste des sous-catégorie
  getSousCategories().then(res => {
    listeSousCategorie.value = res.data.sous_categorie
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible de récupérer les sous-catégories',
      dismissible: true,
      background: "#ef4444"
    })
  })
})

watch(categorieSelected, () => {
  rechercheArticleParCategorie(categorieSelected.value.name)
})

// Récupère la liste des articles enregistrés
const getArticles = () => {
  getArticlesListe().then(res => {
    listeArticles.value = res.data.produit
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible d\'actualiser les articles',
      dismissible: true,
      background: "#ef4444"
    })
  })
}

const openModalEditArticle = (item) => {
  document.getElementById('edit-article').click()

  if (item) {
    articleDetail.value = item
  } else {
    articleDetail.value = {}
  }
}

const displayCategorie = (categoryId) => {
  let name = ""
  listeCategorie.value.forEach(element => {
    if (element.id === categoryId) {
      name = element.name
    }
  });

  return name
}

const handleReloadArticleListe = (childMessage) => {
  getArticles()
}

const alertDelete = (articleId) => {
  articleToDelete.value = articleId ? articleId : ''
  document.getElementById('modal-delete').click()
}

const deleteArticle = () => {
  isLoadingDelete.value = true
  // Requête pour supprimé l'article
  removeArticle(articleToDelete.value).then(res => {
    isLoadingDelete.value = false
    document.getElementById('modal-delete').click()
    getArticles()

    snackbar.add({
      type: 'success',
      text: 'Article supprimé avec succès',
      dismissible: true,
      background: "#10b981"
    })
  }).catch(err => {
    isLoadingDelete.value = false

    snackbar.add({
      type: 'error',
      text: 'Impossible de supprimer cet article',
      dismissible: true,
      background: "#ef4444"
    })
  })
}


const rechercheArticleParCategorie = (categorieId) => {
  filtreArticleParCategorie(categorieId).then(res => {
    console.log('RESPO', res.data)
    listeArticles.value = res.data.produit
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible d\'actualiser les articles',
      dismissible: true,
      background: "#ef4444"
    })
  })
}


const makeRequest = debounce(function () {
  filtreArticleParNom(searchTerm.value).then(res => {
    console.log('RESPO x', res.data)
    listeArticles.value = res.data.produit
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible d\'actualiser les articles',
      dismissible: true,
      background: "#ef4444"
    })
  })
}, 2000);

function onInput() {
  console.log('req')
  makeRequest();
}

</script>

<style>
@keyframes p-progress-spinner-color {

  100%,
  0% {
    stroke: #000;
  }

  40% {
    stroke: #000;
  }

  66% {
    stroke: #000;
  }

  80%,
  90% {
    stroke: #000;
  }
}

.vue3-snackbar-message-wrapper {
  color: black;
}

@media screen and (max-width: 640px) {
  .vue3-snackbar-message-wrapper {
    font-size: 12px;
  }
}

.select-custom-height.select {
  min-height: 2.5rem !important;
  height: 2.75rem;
}

.ProseMirror {
  margin-top: .75rem;
  outline: none !important;
}

@media screen and (max-width: 540px) {
  .modal-ajout-article .column {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 540px) {
  .modal-ajout-article .column-action {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
  }

  .modal-ajout-article .column-action button {
    width: 100%;
  }

  .modal-ajout-article button.custom-btn {
    margin-left: 0 !important;
    margin-bottom: 15px;
  }
}
</style>