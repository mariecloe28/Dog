<template>
  <div class="core-layout">
    <span class="left-box list-group-item.active">
      <BreedsList />
    </span>
    <div class=".container right-box">
      <h1>The dogs facts !</h1>
      <h2>Welcome !</h2>
      <RandomFacts />
    </div>
  </div>
</template>

<script setup>
import BreedsList from '@/components/BreedsList.vue'
import RandomFacts from '@/components/RandomFacts.vue'
</script>

<style>
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
h1 {
  text-align: center;
  font-family: Roboto, sans-serif;
  padding: 10px;
}

h2 {
  text-align: center;
  font-family: Roboto, sans-serif;
}
</style>
