const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#E8D7F1',
    height: '5px'
  },

  /*
   ** Page transistions
   */
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  // router: {
  //   middleware: 'auth'
  // },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', '~/assets/style/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    '~/plugins/sf.client.js',
    '@/plugins/anime.client.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   */
  googleAnalytics: {
    id: 'UA-12301-2'
  },

  // auth: {
  //   strategies: {
  //     social: {
  //       _scheme: 'sf',
  //       authorization: process.env.SALESFORCE_AUTH_URL,
  //       tokenURL: process.env.SALESFORCE_TOKEN_URL,
  //       userInfoURL: process.env.SALESFORCE_USER_INFO_URL,
  //       clientID: process.env.SALESFORCE_CLIENT_ID,
  //       clientSecret: process.env.SALESFORCE_CLIENT_SECRET
  //     }
  //   }
  // },

  // serverMiddleware: ['~/serverMiddleware/selectiveSSR.js'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  vue: {
    config: {
      devtools: true
    }
  }
}
