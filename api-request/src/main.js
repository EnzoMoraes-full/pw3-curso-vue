import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

import './plugins/bootstrap-vue'
import './services/api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
