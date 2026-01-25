import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.use(router)

app.mount('#app')
