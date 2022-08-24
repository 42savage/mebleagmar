export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Meble na wymiar AGMAR',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Zajmujemu się produkcją mebli na wymiar. Oferujemy meble kuchenne, pokojowe, łazienkowe, łoża sypialniane, szafki RTV i zabudowy pawlaczy.',
      },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'AGMAR - Meble na wymiar',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: '@assets/fbimg.jpg',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Zajmujemu się produkcją mebli na wymiar. Oferujemy meble kuchenne, pokojowe, łazienkowe, łoża sypialniane, szafki RTV i zabudowy pawlaczy. ',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  serverMiddleware: [{ path: '/api/mail', handler: '~/api/mail' }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss', '@/assets/css/flicking.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gsap.js' },
    { src: '~/plugins/flicking.js' },
    { src: '~/plugins/scrollLock.js' },
    { src: '~/plugins/vuexSync.js' },
    { src: '~/plugins/stars.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-mq'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
}
