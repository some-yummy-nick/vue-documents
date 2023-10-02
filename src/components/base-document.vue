<template>
  <div v-if="document" class="document">
    <div class="document__wrapper">
      <div class="document__image">
        <img class="document__picture" :src="document.image" :alt="document.description">
      </div>
      <div class="document__info">
        <h2 class="document__name small-title">{{ document.name }}</h2>
        <div class="document__buttons">
          <button class="reset-btn btn btn_blue" @click="generateAndDownloadFile(document.description)">Скачать</button>
          <button class="reset-btn btn btn_red" :disabled="!document.image">Удалить</button>
        </div>
        <h2 class="small-title">Описание:</h2>
        <div class="document__description">{{ document.description }}</div>
      </div>
    </div>
  </div>
  <div v-else class="empty">Выберите документ, чтобы посмотреть его содержимое</div>
</template>

<script setup>
import {storeToRefs} from "pinia";

import {useDocumentStore} from "@/store/document";

const documentStore = useDocumentStore()
const {document} = storeToRefs(documentStore)

function generateAndDownloadFile(text) {
  const blob = new Blob([text], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);

  const link = window.document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'file.txt');
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
}
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

.document {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding: 30px 20px;
  }

  &__image {
    background-color: #ccc;
    overflow: hidden;
  }

  &__picture {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
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
      position: absolute;
      border: 1px solid $border-color;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-image: url('@/assets/images/big-default-image.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &__buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: $mobile-width) {
    &__wrapper {
      display: block;
    }
  }

  &__image{
    margin-bottom: 15px;
  }
}

</style>