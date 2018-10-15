// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.mixin({
  data () {
    return {
      contacts: [
        // {
        //   firstname: 'Sammy',
        //   lastname: 'Zain',
        //   email: 'samzain@www.org',
        //   phone: '2376581225',
        //   address: '1234 Atlanta'
        // },
        // {
        //   firstname: 'Kevin',
        //   lastname: 'Hart',
        //   email: 'kevohart@www.org',
        //   phone: '2376581225',
        //   address: '42546 Los Angels'
        // }
      ]
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
