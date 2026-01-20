<template>
  <div>
    <div v-for="breed in breedsList" :key="breed">{{ breed.attributes.name }}</div>
  </div>
</template>

<script setup>
import { getBreedsPage } from '@/assets/api/calls.js'
import { onMounted, ref } from 'vue'
// list afficher en array
const breedsList = ref([])
onMounted(async () => {
  breedsList.value = await getBreedsPage(1)
})
</script>

<style></style>
