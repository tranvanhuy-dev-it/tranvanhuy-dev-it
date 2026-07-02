import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/styles/main.css'

if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light')
}

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
