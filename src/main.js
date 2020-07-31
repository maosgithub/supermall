import 'normalize.css/normalize.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   ak: '4cFmAiyPLKKQTxIssdPX7uFdQGsOAXjH'
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
