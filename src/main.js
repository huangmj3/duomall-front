import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//导入全局样式表
import './assets/css/global.css'

import './plugins/iview.js'

// //配置请求的路径
// axios.defaults.baseUrl = 'http://47.94.204.116:8804/'
//token验证
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  // config.headers.Access-Control-Allow-Origin : '*';
  return config;
})
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
