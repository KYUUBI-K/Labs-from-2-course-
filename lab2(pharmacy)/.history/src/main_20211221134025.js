import Vue from 'vue'
import App from './App.vue'
import store from './state/index'
import VueRouter from 'vue-router';
import router from './router/index'

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
