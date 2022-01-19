import Vue from 'vue'
import App from './App.vue'
import style from '@/assets/style/main.scss'

Vue.config.productionTip = false

new Vue({
  style,
  render: h => h(App),
}).$mount('#app')
