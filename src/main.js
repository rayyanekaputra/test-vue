import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router' //tidak perlu ke index.js karena sudah terdeteksi otomatis 
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
