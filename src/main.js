import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/styles/style.scss'
import BaseOverlay from "@/components/base-overlay.vue"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component('BaseOverlay', BaseOverlay)
app.mount('#app')
