// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue';
import VueSocketio from 'vue-socket.io'

import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VueSocketio, 'http://demovue.dev:8809')

Vue.component('app', App)

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'login'})
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')

require('../node_modules/bootstrap/dist/js/bootstrap.min')