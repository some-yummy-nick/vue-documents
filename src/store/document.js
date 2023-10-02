import {defineStore} from "pinia";
import {ref} from "vue";

export const useDocumentStore = defineStore('document', () => {
    const document = ref(null)

    function setDocument(payload) {
        document.value = payload
    }

    return {document, setDocument}
})