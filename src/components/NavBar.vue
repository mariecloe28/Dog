<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link text-info">Home</router-link>
        </li>
      </ul>
      <SearchBar />
    </div>
  </nav>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
</script>

<style scoped></style>
