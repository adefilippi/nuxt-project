export default {
  target: 'static',
  env: {
    NUXT_ENV_API_AUTH_URL: process.env.NUXT_ENV_API_AUTH_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    middleware: ['auth']
  },
  axios: {
    baseURL: process.env.NUXT_ENV_API_AUTH_URL,
    https: true,
  },
 /* auth: {
    strategies: {
      local: {
        user: {
          property: 'username',
          autoFetch: true
        },

        token: {
          property: 'key',
          type: 'Token',
          name: 'Authorization',
        },
        redirect: {
          login: '/login',
          logout: '/logout',
          home: '/'
        },
        endpoints: {
          login: { url: 'auth', method: 'post', propertyName: 'tokens' },
          user : false,
          logout: false,
        },
      }
    }
  }*/

  auth: {
    localStorage: {
      prefix: 'auth.',
      options: {
        path: '/',
        maxAge: 10800
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth', method: 'post', propertyName: 'token' },
          user: false,
          logout: false
        }
      }
    }
  },
}
