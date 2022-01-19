import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
