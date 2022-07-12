import Vue from 'vue'
import '@egjs/vue-flicking/dist/flicking.css'
if (process.browser) {
  const VueFlicking = require('@egjs/vue-flicking')
  Vue.use(VueFlicking)
}
