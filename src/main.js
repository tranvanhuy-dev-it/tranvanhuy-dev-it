import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/styles/main.css'

const savedTheme = localStorage.getItem('theme') || 'light'
if (savedTheme === 'light') {
  document.documentElement.classList.add('light')
} else {
  document.documentElement.classList.remove('light')
}

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
