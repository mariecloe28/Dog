<template>
  <div class="breed text-center" v-if="breed">
    <p class="name">Name : {{ breed.name }}</p>
    <p class="description">Description : {{ breed.description }}</p>
    <p class="hypoallergenic" >Hypoallergenic :<span v-if="breed.hypoallergenic"> Yes </span> <span v-else> No </span></p>
    <p class="life-range">Life Range : {{ breed.life.min }} to {{ breed.life.max }} years</p>
    <p class="male-weight">Male Weight : {{ breed.male_weight.min }} to {{ breed.male_weight.max }} kg</p>
    <p class="female-weight">Female Weight : {{ breed.female_weight.min }} to {{ breed.female_weight.max }} kg</p>
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

<style scoped>
  .breed{
    justify-content: center;
    background-color: blueviolet;
    font-size: large;
  }
  body {
    align-content: center;
  }
  .description {
    display: flex;
    flex-direction: warp;
  }
</style>
