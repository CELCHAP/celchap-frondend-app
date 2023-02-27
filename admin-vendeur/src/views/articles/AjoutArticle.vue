<template>
  <div>

    <div class="flex items-center gap-x-4">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-base text-gray-600 font-semibold">Nom</span>
        </label>
        <input type="text" placeholder="Sac à main GUCCI" class="input input-bordered w-full font-medium rounded-md" />
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-base text-gray-600 font-semibold">Catégorie</span>
        </label>
        <select class="select select-bordered font-medium rounded-md">
          <option value="" disabled selected>Choisir une catégorie</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
    </div>

    <!-- Editeur de text -->
    <div class="mt-2">
      <label class="label">
        <span class="text-md font-semibold">Description de l'article</span>
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

    <div class="flex items-center gap-x-4 mt-2">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-base text-gray-600 font-semibold">Prix normal (FCFA)</span>
        </label>
        <input type="text" placeholder="45000" class="input input-bordered w-full font-medium rounded-md" />
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-base text-gray-600 font-semibold">Prix en promo (FCFA)</span>
        </label>
        <input type="text" placeholder="34000" class="input input-bordered w-full font-medium rounded-md" />
      </div>
    </div>

    <div class="mt-2">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text text-base text-gray-600 font-semibold">Quantité en stock</span>
        </label>
        <input type="text" placeholder="6" class="input input-bordered w-full font-medium rounded-md" />
      </div>
    </div>

    <div class="mt-3">
      <p class="text-base font-semibold mt-1">Photos de l'articles</p>
      <div class="bg-white rounded-md h-20 w-full mt-2 border-2 border-dashed flex items-center justify-center">
        <p class="cursor-pointer text-sm text-gray-400">Sélectionnez une ou plusieurs photos</p>
      </div>
    </div>

    <div class="modal-action">
      <label for="edit-article" class="btn">Annuler</label>
      <label for="edit-article" class="btn">Enregistrer</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>Tapez une description ici</p> <br><br>',
  // triggered on every change
  onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    articleData.value.description = html
  },
  extensions: [
    StarterKit,
  ],
})

const articleDataField = ref({
  title: '',
  category: '',
  description: '',
  prix: '',
  prix_promo: '',
  date_fin_promo: '',
  poids: '',
  taille: '',
  stock: '',
  disponibilite: 'oui'
})
const component  = ref({})
const inputImages = ref([])
const imageType = ref(['image/jpeg', 'image/png', 'image/gif'])
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