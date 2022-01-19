import Vue from 'vue'
import App from './App.vue'
//Імпортуємо наш стиль 
// import style from '@/assets/style/index.scss'

Vue.config.productionTip = false

new Vue({
  //Підключаємо його 
  // style,
  render: h => h(App),
}).$mount('#app')
