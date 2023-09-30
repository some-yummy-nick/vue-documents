<template>
  <div v-if="document" class="document">{{document.id}}</div>
  <div v-else class="empty">Выберите документ, чтобы посмотреть его содержимое</div>
</template>

<script setup>
const props = defineProps({
  document: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables";

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  color: $gray-color;
}

.document{
  width: 100%;
}
</style>