<template>
  <div class="search-wrapper">
    <form class="d-flex" role="search" @submit.prevent>
      <input v-model="search" class="form-control" type="search" placeholder="Name of breed" />
      <button class="btn btn-outline-info" type="submit">Search</button>
    </form>
    <ul v-if="search && breedResults.length" class="list-group">
      <li v-for="breed in breedResults" :key="breed.id" class="list-group-item">
        {{ breed.attributes.name }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { getAllBreedsName } from '@/assets/api/calls.js'
import { computed, onMounted, ref } from 'vue'

const breedsList = ref(null)
const search = ref('')
const breedResults = computed(() => {
  console.log(breedsList.value)
  let a = breedsList.value
    .filter((breed) =>
      breed.attributes.name.toLowerCase().includes(search.value.toString().toLowerCase()),
    )
    .slice(0, 10)

  console.log(a)
  return a
})
onMounted(async () => {
  breedsList.value = await getAllBreedsName()
  //console.log(breedsList.value.map(breed => breed.attributes.name))
})

// reste à faire : quand je clique sur un résultat, je veux que ça m'amène à la page de ce breed (il faut que je fasse une route pour ça) et que le search se vide.
</script>

<style scoped>
.search-wrapper {
  position: relative;
}

.search-wrapper ul {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0;
  z-index: 1000;
  background-color: #ff2c2c;

  max-height: 300px;
  overflow-y: auto;
}
</style>
