<template>
  <div class="app">
    <div class="container app__container">
      <BaseHeader/>
      <BaseOverlay v-if="overlay"/>
      <div class="app__wrapper">
        <BaseSidebar/>
        <BaseDocument/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {watch} from 'vue'
import {request} from "@/api";
import {storeToRefs} from 'pinia'

import {useOverlayStore} from "@/store/overlay";
import {useDocumentsStore} from "@/store/documents";
import {useDocumentStore} from "@/store/document";
import {useSearchStore} from "@/store/search";

import BaseHeader from "@/components/base-header.vue"
import BaseSidebar from "@/components/base-sidebar.vue"
import BaseDocument from "@/components/base-document.vue"

const overlayStore = useOverlayStore()
const {overlay} = storeToRefs(overlayStore)
const {setOverlay} = overlayStore
const documentsStore = useDocumentsStore()
const {setDocuments} = documentsStore
const {documents} = storeToRefs(documentsStore)
const documentStore = useDocumentStore()
const {setDocument} = documentStore
const searchStore = useSearchStore()
const {search} = storeToRefs(searchStore)

watch(search, async () => {
  if (search.value) {
    await getDocuments(search.value)
  } else {
    setDocuments([])
    setDocument(null)
  }
})

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

  @media screen and (max-width: $mobile-width) {
    &__wrapper {
      display: block;
    }
  }
}
</style>
