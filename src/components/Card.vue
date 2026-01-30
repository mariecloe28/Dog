<template>
  <div class="card">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">Did you know?</h5>
      <p class="card-text text-center mt-4">{{ props.message }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: { type: String, required: true },
})
</script>

<style scoped>
.card-text {
  height: 85px;
  overflow-y: auto;
}
</style>
