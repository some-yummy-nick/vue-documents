<template>
  <div class="app">
    <div class="container app__container">
      <BaseHeader/>
      <BaseOverlay v-if="overlay"/>
      <div class="app__wrapper">
        <BaseSidebar
            @handleSearch="handleFieldsInput"
            @handleDocument="setDocument"
        />
        <BaseDocument :document="document"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useDebounce} from "@/use/debounce";
import {request} from "@/api";
import {storeToRefs} from 'pinia'

import {useOverlayStore} from "@/store/overlay";
import {useDocumentStore} from "@/store/documents";

import BaseHeader from "@/components/base-header.vue"
import BaseSidebar from "@/components/base-sidebar.vue"
import BaseDocument from "@/components/base-document.vue"
import {ref} from "vue";

const overlayStore = useOverlayStore()
const {overlay} = storeToRefs(overlayStore)
const {setOverlay} = overlayStore
const documentStore = useDocumentStore()
const {setDocuments} = documentStore
const handleFieldsInput = useDebounce(handleInput, 500)
const {documents} = storeToRefs(documentStore)
const document = ref(null)

function handleInput(value) {
  if (value) {
    getDocuments(value)
  } else {
    document.value = null
    setDocuments([])
  }
}

async function getDocuments(q) {
  try {
    setOverlay(true)
    const data = await request(`user/docs?search=${q}`);
    setDocuments(data);
  } catch (e) {
    console.error(e);
  } finally {
    setOverlay(false)
  }
}

function setDocument(id) {
  document.value = documents.value.find(item => item.id === id)
}
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables";

.app {
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100%;

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__wrapper {
    flex-grow: 1;
    display: flex;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
  }


}
</style>
