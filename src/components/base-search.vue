<template>
  <div class="search">
    <h2 class="small-title">Поиск документа</h2>
    <input type="search" class="input" placeholder="Введите ID документа" @input="handleInput">
  </div>
</template>

<script setup>
const emit = defineEmits(['handleSearch'])

function handleInput(e) {
  emit('handleSearch', e.target.value)
}
</script>

<style scoped>

</style>