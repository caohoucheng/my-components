# cc-components

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Use

```js
import Vue from 'vue'
import App from './App.vue'
import components from '@caocc/components'
import '@caocc/components/lib/lib.css'

Vue.use(components)

new Vue({
  render: h => h(App),
}).$mount('#app')

```
