// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js' //import router.js
import axios from 'axios' //import axios
import store from '../vuex/store.js'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

Vue.prototype.$axios = axios; //add axios setting

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router, //add router setting
  components: { App },
  template: '<App/>'
})
