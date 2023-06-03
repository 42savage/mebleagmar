import Vue from 'vue'
import VueGtag from 'vue-gtag'

if (process.browser) {
  Vue.use(VueGtag, {
    config: { id: 'GTM-5P38PPR' },
    appName: 'Meble Radom',
  })
}
