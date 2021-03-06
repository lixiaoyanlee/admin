// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import routerConfig from './router/config'

Vue.use(ElementUI)
routerConfig(router, store)

const debug = process.env.NODE_ENV !== 'production'

Vue.config.devtools = debug
Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
