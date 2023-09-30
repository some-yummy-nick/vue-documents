import {defineStore} from "pinia";
import {ref} from "vue";

export const useOverlayStore = defineStore('overlay', () => {
    const overlay = ref(false)

    function setOverlay(payload) {
        overlay.value = payload
    }

    return {overlay, setOverlay}
})