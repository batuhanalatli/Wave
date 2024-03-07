import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from '/src/includes/validation'

import './assets/base.css'
import './assets/main.css'
import { auth } from './includes/firebase'

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(createPinia())

    app.mount('#app')
  }
})
