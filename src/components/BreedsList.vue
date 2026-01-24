<template>
  <div class="list-group" data-bs-theme="dark">
      <router-link 
      v-for="breed in breedsList" 
      :key="breed.id":to="{name: 'BreedView', params: { breedId: breed.id }}" class="list-group-item list-group-item-action list-group-item-info"
      >
        {{ breed.attributes.name }}
      </router-link>
  </div>
</template>

<script setup>
import { getBreedsPage } from '@/assets/api/calls.js'
import { onMounted, ref } from 'vue'
// list afficher en array
const breedsList = ref([])
const pageNumber = ref(1)
onMounted(async () => {
  breedsList.value = await getBreedsPage(pageNumber.value)
  
})
</script>

<style>

</style>
