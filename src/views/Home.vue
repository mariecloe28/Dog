<template>
  
  <div class="core-layout">
    <span class="left-box list-group-item.active">
      <BreedsList />
    </span>
    <div class=".container right-box">
      <h1>The dogs facts !</h1>
      <h2>Welcome !</h2>
      <div>
        <button class="btn btn-primary" type="button">
          Want to know a random fact about dog ? Click Here!
        </button>
        <button class="btn btn-primary" type="button">
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
  background-color: #bfe8f0;
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.left-box {
  width: 15%;
  display : flex;
  align-items: center;
}
.right-box {
  width: 85%;
}
</style>
