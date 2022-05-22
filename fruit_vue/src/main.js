import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import Qui from '@qvant/qui';
import '@qvant/qui/dist/qui.css';

// Setup all components
Vue.use(Qui);
// that's it! All components will be imported with styles
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
