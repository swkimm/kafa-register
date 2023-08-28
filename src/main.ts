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
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

// configure font-awesome
library.add(faGithub, faTwitter, faFacebook, faInstagram, faDiscord)
app.component('font-awesome-icon', FontAwesomeIcon)

// configure web font
loadFonts()

// configure pinia
app.use(createPinia())

// configure router
app.use(router)

// configure header
app.use(head)

app.mount('#app')
