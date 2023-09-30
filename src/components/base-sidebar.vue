<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <BaseSearch @handleSearch="handleSearch"/>
      <BaseDocuments @handleDocument="handleDocument"/>
    </div>
  </div>
</template>

<script setup>
import BaseDocuments from "@/components/base-documents.vue"
import BaseSearch from "@/components/base-search.vue"

function handleSearch(value) {
  emit('handleSearch', value)
}

function handleDocument(value) {
  emit('handleDocument', value)
}

const emit = defineEmits(['handleSearch', 'handleDocument'])
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables";

.sidebar {
  min-width: 280px;
  padding: 30px 20px;
  border-right: 1px solid $border-color;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>