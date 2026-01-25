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
          Want to know a random fact about dog ? Click Here!
        </button>
        <button type="button" class="btn btn-dark btn-outline-info">
          Want to see info about a breed? Click Here!
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreedsList from '@/components/BreedsList.vue'
// doit mettre breed list.
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
