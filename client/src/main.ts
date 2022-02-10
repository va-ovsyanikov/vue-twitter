import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faComment,faShareSquare, faClone, faFileImage, faTimesCircle  } from '@fortawesome/free-regular-svg-icons'
import { faListAlt,faArrowLeft, faUser,faBookmark,faSearch, faHome, faBell, faEnvelope, faUserPlus, faCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Notifications from '@kyvg/vue3-notification'

library.add(
    faArrowLeft,
    faTwitter, 
    faSearch, 
    faBell, 
    faEnvelope,
    faBookmark, 
    faListAlt, 
    faUser, 
    faHome, 
    faHeart, 
    faComment,
    faShareSquare,
    faClone,
    faUserPlus,
    faCircle,
    faFileImage,
    faTimesCircle
    )

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './assets/style.less'



const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(Notifications)
app.use(store)
app.use(router)
app.directive('fixed', {
    mounted(el) {
        el.style.position = 'sticky'
        // el.style.zIndex = 3
        el.style.top = '0'
        el.style.height = '100vh'
      }
  })

app.mount('#app')

