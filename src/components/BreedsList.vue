<template>
  <div class="list-group">
    <div>
      <button
        @click="loadNewPage(false)"
        type="button"
        class="btn btn-dark btn-outline-info"
        :disabled="firstPage"
      >
        Show less
      </button>
    </div>
    <router-link
      v-for="breed in breedsList"
      :key="breed.id"
      :to="{ name: 'BreedView', params: { breedId: breed.id } }"
      class="list-group-item list-group-item-action list-group-item-info"
    >
      {{ breed.attributes.name }}
    </router-link>
    <div>
      <button
        @click="loadNewPage(true)"
        type="button"
        class="btn btn-dark btn-outline-info"
        :disabled="lastPage"
      >
        Show more
      </button>
    </div>
  </div>
</template>

<script setup>
import { getBreedsPage } from '@/assets/api/calls.js'
import { computed, onMounted, ref } from 'vue'
// list afficher en array
const breedsList = ref([])
let pageNumber = ref(1)

const loadNewPage = async (isAscending) => {
  if (isAscending) {
    pageNumber.value = pageNumber.value + 1
  } else {
    pageNumber.value = pageNumber.value - 1
  }
  breedsList.value = await getBreedsPage(pageNumber.value)
}
const firstPage = computed (() => pageNumber.value === 1)
const lastPage = computed (() => breedsList.value.length < 9)
onMounted(async () => {
  breedsList.value = await getBreedsPage(pageNumber.value)
})
</script>

<style></style>
