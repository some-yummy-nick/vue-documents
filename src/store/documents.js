import {defineStore} from "pinia";
import {ref} from "vue";

export const useDocumentStore = defineStore('documents', () => {
    const documents = ref([])

    function setDocuments(payload) {
        documents.value = payload
    }

    return {documents, setDocuments}
})