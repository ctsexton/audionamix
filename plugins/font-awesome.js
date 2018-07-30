import Vue from 'vue'
import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab)
icon({prefix: 'fab', iconName: 'facebook'})
icon({prefix: 'fab', iconName: 'instagram'})
icon({prefix: 'fab', iconName: 'twitter'})
icon({prefix: 'fab', iconName: 'soundcloud'})
icon({prefix: 'fab', iconName: 'youtube'})

Vue.component('font-awesome-icon', FontAwesomeIcon)
