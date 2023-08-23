import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { loadFonts } from './plugins/webfontloader'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(faGithub)
library.add(faTwitter)
library.add(faFacebook)
library.add(faInstagram)
library.add(faDiscord)

app.component('font-awesome-icon', FontAwesomeIcon)

loadFonts()

app.use(createPinia())
app.use(router)

app.mount('#app')
