<template>
  <div v-if="breed">
    <p>Name : {{ breed.name }}</p>
    <p>Description : {{ breed.description }}</p>
    <p>Hypoallergenic :<span v-if="breed.hypoallergenic"> Yes </span> <span v-else> No </span></p>
    <p>Life Range : {{ breed.life.min }} to {{ breed.life.max }} years</p>
    <p>Male Weight : {{ breed.male_weight.min }} to {{ breed.male_weight.max }} kg</p>
    <p>Female Weight : {{ breed.female_weight.min }} to {{ breed.female_weight.max }} kg</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
// selon race cliquer sur liste des races. Doit eter linker avec BreedList.vue
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getBreedAttributesById } from '@/assets/api/calls';

const route = useRoute()
const breed = ref(null)

onMounted(async () => {
  const breedId = route.params.breedId
  breed.value = await getBreedAttributesById(breedId)
  
})

</script>

<style></style>
