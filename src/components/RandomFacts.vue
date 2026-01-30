<template>
  <div class="title-fact">
    <span class="fact-title display-6 p-2 bg-info bg-opacity-25 border border-info-dark rounded-5">
      Random Facts!
    </span>
  </div>

  <div class="mb-3">
    <label class="form-label fs-5">How many facts do you want to show?</label>
    <select v-model="numberOfFacts" class="form-select w-auto">
      <option v-for="n in 5" :key="n" :value="n">
        {{ n }}
      </option>
    </select>
  </div>
  <div class="bouton d-flex ms-5">
    <button class="btn btn-dark btn-outline-info mb-3" @click="generateFacts">
      Get random facts
    </button>
    <button
      v-if="facts.length"
      class="btn btn-dark btn-outline-danger mb-3 ms-1"
      @click="clearFacts"
    >
      Clear facts
    </button>
  </div>
  <div class="row g-2" style="width: 60rem">
    <div class="col-12 col-md-6 col-lg-4" v-for="fact in facts" :key="fact">
      <Card :message="fact" />
    </div>
  </div>
</template>

<script setup>
import { getRandomFacts } from '@/assets/api/calls.js'
import { ref } from 'vue'
import Card from '@/components/Card.vue'

const numberOfFacts = ref(1)
const facts = ref([]) // fact est un tableau !

const generateFacts = async () => {
  facts.value = await getRandomFacts(numberOfFacts.value) // retourne une array
}
const clearFacts = () => {
  facts.value = []
}
</script>

<style scoped>
.mb-3 {
  display: flex;
  align-items: center;
  margin: 15px;
}
label {
  padding: 25px;
}
h3 {
  padding: 15px;
}
.title-fact {
  padding-top: 50px;
  padding-left: 25px;
}
button {
}
</style>