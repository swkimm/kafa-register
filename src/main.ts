import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { loadFonts } from './plugins/webfontloader'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

// configure font-awesome
library.add(faInstagram, faCaretLeft, faCaretRight)
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
