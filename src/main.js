import Vue from 'vue'
import App from './App.vue'
import components from '@caocc/components'
import '@caocc/components/lib/lib.css'
import './styles/index.scss'
Vue.config.productionTip = false

Vue.use(components)

new Vue({
  render: h => h(App),
}).$mount('#app')
