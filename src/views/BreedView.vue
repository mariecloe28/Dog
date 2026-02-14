<template>
  <div class="breed text-center" v-if="breed">
    <h4 class="name">Name</h4>
    <p>{{ breed.name }}</p>
    <h4 class="description">Description</h4>
    <p>{{ breed.description }}</p>
    <h4 class="hypoallergenic">Hypoallergenic</h4>
    <p><span v-if="breed.hypoallergenic"> Yes </span> <span v-else> No </span></p>

    <h4 class="life-range fs-4">Life Range</h4>
    <p>{{ breed.life.min }} to {{ breed.life.max }} years</p>
    <h4 class="male-weight fs-4">Male Weight</h4>
    <p>{{ breed.male_weight.min }} to {{ breed.male_weight.max }} kg</p>
    <h4 class="female-weight fs-4">Female Weight :</h4>
    <p>{{ breed.female_weight.min }} to {{ breed.female_weight.max }} kg</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
// selon race cliquer sur liste des races. Doit eter linker avec BreedList.vue
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getBreedAttributesById } from '@/assets/api/calls'

const route = useRoute()
const breed = ref(null)

onMounted(async () => {
  const breedId = route.params.breedId
  breed.value = await getBreedAttributesById(breedId)
})
</script>

<style scoped>
.breed {
  justify-content: center;
  font-size: large;
  margin: 45px;
}
body {
  align-content: center;
}
.name {
  margin-top: 25px;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin: 5px;
}
</style>
