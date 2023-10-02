import {defineStore} from "pinia";
import {ref} from "vue";

export const useSearchStore = defineStore('search', () => {
    const search = ref([])

    function setSearch(payload) {
        search.value = payload
    }

    return {search, setSearch}
})