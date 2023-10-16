import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { loadFonts } from './plugins/webfontloader'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCaretLeft, faCaretRight, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createHead } from '@vueuse/head'
import VueGtag from 'vue-gtag'

const app = createApp(App)
const head = createHead()

// configure font-awesome
library.add(faInstagram, faCaretLeft, faCaretRight, faTrophy)
app.component('font-awesome-icon', FontAwesomeIcon)

// configure web font
loadFonts()

// configure pinia
app.use(createPinia())

// configure GA
app.use(
  VueGtag,
  {
    config: {
      id: 'G-0K8R406LPX',
      params: {
        send_page_view: false
      }
    }
  },
  router
)

// configure router
app.use(router)

// configure header
app.use(head)

app.mount('#app')
