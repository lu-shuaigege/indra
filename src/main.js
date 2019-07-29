// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//引入store
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Api from './api/index.js';
Vue.prototype.$api = Api;

import $ from 'jquery'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */

// 并将ｓｔｏｒｅ挂载到ｖｕｅ上
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: {
    App,
    // store
  },
  template: '<App/>',
  render: h => h(App),
  // render: (createElement) => createElement(App)
})
