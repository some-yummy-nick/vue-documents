<template>
  <div class="search">
    <h2 class="small-title">Поиск документа</h2>
    <input type="search"
           class="input"
           placeholder="Введите ID документа"
           :value="search"
           @input="handleFieldsInput"
    >
  </div>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useSearchStore} from "@/store/search";
import {useDebounce} from "@/use/debounce";

const searchStore = useSearchStore()
const {search} = storeToRefs(searchStore)
const {setSearch} = searchStore
const handleFieldsInput = useDebounce(handleInput, 500)

function handleInput(e) {
  setSearch(e.target.value)
}
</script>

<style scoped>

</style>