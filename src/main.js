import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import components from '@caocc/components'
import '@caocc/components/lib/lib.css'
import './styles/index.scss'
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(components)

new Vue({
  render: h => h(App),
}).$mount('#app')
