import 'normalize.css/normalize.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from "components/common/toast/index.js";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = true
Vue.use(Toast);
Vue.use(VueLazyLoad, {
  loading: require("assets/img/common/placeholder.png")
});
// Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

