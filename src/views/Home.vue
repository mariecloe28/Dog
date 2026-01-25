<template>
  <div class="core-layout">
    <span class="left-box list-group-item.active">
      <BreedsList />
    </span>
    <div class=".container right-box">
      <h1>The dogs facts !</h1>
      <h2>Welcome !</h2>
      <div>
        <button type="button" class="btn btn-dark btn-outline-info">
          <router-link :to="{name:'RandomFacts'}"> Want to know a random fact about dog ? Click Here! </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreedsList from '@/components/BreedsList.vue'
import RandomFacts from '@/components/RandomFacts.vue'
import { onMounted } from 'vue'
import { randomFacts } from '@/assets/api/calls.js'

onMounted(() => {
  randomFacts(5)
})
</script>

<style scoped>
.core-layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.left-box {
  width: 15%;
  display: flex;
  align-items: center;
}
.right-box {
  width: 85%;
}
</style>
