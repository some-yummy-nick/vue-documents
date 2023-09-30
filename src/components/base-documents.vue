<template>
  <div class="documents">
    <div class="documents__top">
      <h2 class="small-title">Результаты</h2>
    </div>
    <div class="documents__wrapper" v-if="documents.length">
      <button class="reset-btn documents__item" v-for="document in documents" :key="document.id"
              @click="handleDocument(document.id)">
        <span class="documents__image">
          <img class="documents__picture" :src="document.image" :alt="document.description">
        </span>
        <span class="documents__description">
          <span class="documents__name">{{ document.name }}</span>
          <span class="documents__size">12 MB</span>
        </span>
      </button>
    </div>
    <div class="documents__empty" v-else>Ничего не найдено</div>
  </div>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useDocumentStore} from "@/store/documents";
import {ref} from "vue";

const documentStore = useDocumentStore()
const {documents} = storeToRefs(documentStore)

function handleDocument(id) {
  emit('handleDocument', id);
}

const emit = defineEmits(['handleDocument'])
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables";

.documents {
  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
    overflow: hidden;
    font-size: 14px;
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__image {
    width: 70px;
    height: 70px;
    background-color: #ccc;
  }

  &__picture {
    display: block;
    position: relative;
    height: 100%;
    font-weight: 300;
    line-height: 2;
    text-align: center;
    min-width: 70px;
    min-height: 70px;
    object-fit: cover;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: #ccc;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: -2px;
      transform: translateY(-50%);
      background-image: url('@/assets/images/default-image.png');
    }
  }

  &__name {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
  }

  &__size {
    color: $gray-color;
  }

  &__empty {
    font-size: 14px;
    color: $gray-color;
  }
}
</style>