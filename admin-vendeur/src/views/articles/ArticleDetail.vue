<template>
  <GridLayout>
    <div class="w-full px-6 pt-10 md:pt-6">
      <div>
        <router-link to="/articles">
          <button
            class="bg-violet-200 text-sm text-black font-bold w-24 sm:w-28 h-8 sm:h-9 rounded-full flex items-center justify-center gap-2">
            <vue-feather type="arrow-left-circle" size="18"></vue-feather>Retour
          </button>
        </router-link>
      </div>

      <div class="mt-10">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl md:text-3xl text-neutral-800 font-extrabold">Détail de l'article</h2>
          <!-- <div class="flex items-center gap-x-2">
            <div class="tooltip" data-tip="Modifier le statut pour rendre l'article visible ou invisble dans la boutique">
              <button class="">
                <vue-feather type="help-circle" size="18"></vue-feather>
              </button>
            </div>
            <p class="text-xl font-extrabold flex items-center gap-x-2">Statut: <span
                class="bg-red-100 text-red-600 px-4 py-px rounded-full text-base normal-case">Brouillon</span></p>
            <button class="bg-sky-200 rounded-md w-8 h-8 flex items-center justify-center cursor-pointer">
              <vue-feather type="edit-2" size="18"></vue-feather>
            </button>
          </div> -->
        </div>

        <div class="flex flex-col-reverse gap-y-5 sm:grid sm:grid-cols-5 gap-x-4 mt-10 pb-16">
          <div class="w-full h-fit grid grid-cols-2 lg:grid-cols-3 gap-3 rounded-md col-span-2">
            <div class="bg-white w-full h-32 rounded-lg border">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.jolicloset.com%2Fimg4%2Ffull%2F2019%2F05%2F126405-1.jpg&f=1&nofb=1&ipt=5c3e8615a3dafdd9efff8e335d86e3f0da53fded2c20e1017f64ec8a787fddea&ipo=images"
                alt="" class="object-cover w-full h-full rounded-md">
            </div>
            <div class="bg-orange-100 w-full h-32 rounded-md">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.jolicloset.com%2Fimg4%2Ffull%2F2019%2F09%2F143973-1.jpg&f=1&nofb=1&ipt=ae0c7c82ba93d9095da06e63fcd3f1244106804f7e0c154e1b4652dec0ec25ce&ipo=images"
                alt="" class="object-cover w-full h-full rounded-md">
            </div>
            <div class="bg-orange-100 w-full h-32 rounded-md"></div>
            <div class="bg-orange-100 w-full h-32 rounded-md"></div>
            <div class="bg-orange-100 w-full h-32 rounded-md"></div>
            <div class="bg-orange-100 w-full h-32 rounded-md"></div>
          </div>
          <div class="bg-white w-full h-fit rounded-md shadow-sm col-span-3 p-3 sm:p-5">
            <div class="flex flex-col gap-y-5">
              <h3 class="text-sm sm:text-base md:text-lg text-orange-600 font-bold">Nom de l'article : <span
                  class="text-sm sm:text-base md:text-lg text-gray-700 font-medium">{{ articleDetail ? articleDetail.name
                    : "" }}</span>
              </h3>
              <h3 class="text-sm sm:text-base md:text-lg text-orange-600 font-bold">Catégorie : <span
                  class="text-sm sm:text-base md:text-lg text-gray-700 font-medium">{{ articleDetail ?
                    articleDetail.categorie.name : "" }}</span></h3>
              <h3 class="text-sm sm:text-base md:text-lg text-orange-600 font-bold">Prix normal : <span
                  class="text-sm sm:text-base md:text-lg text-gray-700 font-medium">{{ articleDetail ?
                    articleDetail.prix_vendeur : "" }} FCFA</span></h3>
              <h3 class="flex gap-x-1 text-sm sm:text-base md:text-lg text-orange-600 font-bold">Description : 
                <!-- <span
                  class="text-sm sm:text-base md:text-lg text-gray-700 font-medium">{{ articleDetail ?
                    articleDetail.description : "" }}</span> -->
                    <p class="text-sm sm:text-base md:text-lg text-gray-700" v-html="articleDetail.description"></p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GridLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GridLayout from '../../layouts/GridLayout.vue';
import ProgressSpinner from 'primevue/progressspinner';
import { filtreArticleParNom } from '../../services/article/ArticleRequest';

const route = useRoute();

const articleDetail = ref("")

onMounted(() => {
  console.log('PARAMETER', route.params.articleName)

  filtreArticleParNom(route.params.articleName).then(res => {
    articleDetail.value = res.data.produit[0]
  }).catch(err => {
    snackbar.add({
      type: 'error',
      text: 'Impossible de récupérer les détails de l\'article',
      dismissible: true,
      background: "#ef4444"
    })
  })
})
</script>

<style></style>