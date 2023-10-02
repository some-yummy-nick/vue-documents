import {defineStore} from "pinia";
import {ref} from "vue";

export const useDocumentsStore = defineStore('documents', () => {
    const documents = ref([])

    function setDocuments(payload) {
        documents.value = payload
    }

    return {documents, setDocuments}
})