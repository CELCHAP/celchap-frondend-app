<script setup>
defineProps({
   label: String,
   name: String,
   placeholder: String,
   xtype: {
    type: String,
    default: 'text'
   },
   inputEl: {
    type: String,
    default: 'input'
   },
   selectOptions: Array,
   selectOptionDisplay: String,
   selectOptionID: String,
   inputError: Object,
   infoInput: String
});
</script>
<template>
   <!-- Input -->
   <div class="flex flex-col gap-1" >
      <label class="text-xs opacity-60 font-bold" :for="name + 'ID'">
         {{ label }}
      </label>
      <input v-if="inputEl === 'input'"
         :type="xtype"
         :id="name + 'ID'"
         class="border-[1px] py-3 rounded-md px-2"
         :placeholder="placeholder"
         :name="name"
      />

      <!-- Select -->
      <select v-if="inputEl === 'select'"
         :id="name + 'ID'"
         class="border-[1px] py-3 rounded-md px-2"
         :placeholder="placeholder"
         :name="name"
         
      >
         <option v-for="op in selectOptions" :value="op[selectOptionID]">{{ op[selectOptionDisplay] }}</option>
      </select>

      <!-- Textera -->
      <textarea v-if="inputEl === 'textarea'"
            class="border-[1px] rounded p-4"
            :name="name"
            :id="name + 'ID'"
            cols="20"
            rows="5"
            :placeholder="placeholder"
         ></textarea>

         <div v-if="!inputError && infoInput" class="text-[10px] opacity-80 flex items-center gap-1 px-2 text-blue-400 " > 
            
            <i class="flex fi fi-sr-info"></i>
            <span class="font-bold">{{ infoInput }}</span>
        </div>
         <span class="text-xs text-red-400" v-if="inputError && inputError.path === name"> {{ inputError.message }} </span>
   </div>

   
</template>
<style scoped></style>
