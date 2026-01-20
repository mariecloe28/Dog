<template>
  <div class="container mt-5 text-center">
    <h1>The dogs facts !</h1>
    <h2>Welcome !</h2>
    <p>BreedsList</p>

    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary" type="button">
        Want to know a random fact about dog ? Click Here!
      </button>
      <button class="btn btn-primary" type="button">
        Want to see info about a breed? Click Here!
      </button>
    </div>
    <BreedsList />
  </div>
</template>

<script setup>
import BreedsList from '@/components/BreedsList.vue'
// doit mettre breed list.
</script>

<style scoped></style>
