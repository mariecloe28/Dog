<template>
  <h1>Random Facts!</h1>

  <!--  <div class="mb-3">
    <label class="form-label">Number of facts</label>
    <select v-model="factsCount" class="form-select w-auto">
      <option v-for="n in 5" :key="n" :value="n">
        {{ n }}
      </option>
    </select>
  </div>-->

  <!--  <button class="btn btn-dark btn-outline-info mb-3" @click="generateFacts">
    Get random facts
  </button>

  < !-- <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Fact</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Did you know?</h6>
      <p class="card-text">
        {{ randomFact }}
      </p>
      <button v-if="facts.length" class="btn btn-outline-secondary mb-3 ms-2" @click="clearFacts">
        Clear facts
      </button>
    </div>
  </div>-->
</template>

<script setup>
/*
 RESULTAT ATTENDU : Afficher des facts sur des cartes
 DONNÉES NÉCESSAIRES : Facts de l'api dog
 ÉTAPES :
 OK    1. Appeler l'api au chargement de la page. (api= randomfacts)
 OK    2. Mettre les données reçues de l'api dans une variable
 OK    3. Vérifier que les données existent (console.log?)
       4. Boucler les données
       5. Afficher les données dans une carte.
 */

import { randomFacts } from '@/assets/api/calls.js'
import { ref } from 'vue'
//const rFacts = randomFacts(1)

// boucler les données.
// c'est quoi mes données? : un ou des randoms facts. ( tout dépend du nombre à afficher)

const numberOfFacts = ref(1)
const facts = ref([])
console.log(randomFacts(1))

const generateFacts = async () => {
  for (let i = 0; i < numberOfFacts.value; i++) {
    const fact = await randomFacts()
    facts.value.push(fact)
  }
  console.log(facts)
}
const clearFacts = () => {
  facts.value = []
}
</script>

<style scoped></style>
