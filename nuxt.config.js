// require('dotenv').config()
const pkg = require('./package')
// const bodyParser = require('body-parser')
// const constants = require('./server/constants.js')

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
    color: '#F6D97B',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl', '~/assets/style/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify', '~/plugins/colorContrast'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: '/auth/login',
  //           method: 'post',
  //           propertyName: 'token'
  //         },
  //         logout: {
  //           url: '/auth/logout',
  //           method: 'post'
  //         },
  //         user: {
  //           url: '/auth/user',
  //           method: 'get',
  //           propertyName: 'user'
  //         }
  //       }
  //     }
  //   }
  // },
  // auth: {
  //   strategies: {
  //     social: {
  //       _scheme: 'oauth2',
  //       authorization_endpoint: constants.SF_LOGIN_URL,
  //       scope: ['api', 'chatter_api', 'custom_permissions', 'full', 'openid'],
  //       response_type: 'code',
  //       token_type: 'Bearer',
  //       redirect_uri: constants.SF_REDIRECT_URL,
  //       client_id: process.env.SF_CLIENT_ID,
  //       token_key: 'access_token'
  //     },
  //     redirect: {
  //       login: '/auth/login',
  //       logout: '/auth/logout',
  //       user: '/profile',
  //       callback: '/auth/callback'
  //     }
  //   }
  // },

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
          // options: {
          //   fix: true
          // }
        })
      }
    }
  }
}
