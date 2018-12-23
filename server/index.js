// require('dotenv').config()
const express = require('express')
// const session = require('express-session')
// const bodyParser = require('body-parser')
const consola = require('consola')
// const jsforce = require('jsforce')
// const constants = require('./constants')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
// app.use('/', router)

// const sessionConfig = {
//   secret: 'super-secret-key',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 60000
//   }
// }

// app.use(session(sessionConfig))

// router.use((req, res, next) => {
//   Object.setPrototypeOf(req, app.request)
//   Object.setPrototypeOf(res, app.response)
//   req.res = res
//   res.req = req
//   next()
// })

// router.get('/login', (req, res) => {
//   if (req.body.username === 'demo' && req.body.password === 'demo') {
//     req.session.authUser = {
//       username: 'demo'
//     }
//     return res.json({
//       username: 'demo'
//     })
//   }
//   res.status(401).json({
//     error: 'Bad credentials'
//   })
// })

// router.get('/logout', (req, res) => {
//   if (req.body.username === 'demo' && req.body.password === 'demo') {
//     req.session.authUser = {
//       username: 'demo'
//     }
//     return res.json({
//       username: 'demo'
//     })
//   }
//   res.status(401).json({
//     error: 'Bad Logout credentials'
//   })
// })

// Import and Set Nuxt.js options

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  // app.use(bodyParser.json())

  // const oauth2 = new jsforce.OAuth2({
  //   loginUrl: constants.SF_LOGIN_URL,
  //   clientId: process.env.SF_CLIENT_ID,
  //   clientSecret: process.env.SF_CLIENT_SECRET,
  //   redirectUri: constants.SF_REDIRECT_URL
  // })

  // app.post('/auth/login', (req, res) => {
  //   const config = {
  //     scope: 'api id web'
  //   }
  //   res.redirect(oauth2.getAuthorizationUrl(config))
  // })

  // app.get('/auth/callback', (req, res) => {
  //   var conn = new jsforce.Connection({
  //     oauth2: oauth2
  //   })
  //   var code = req.param('code')
  //   conn.authorize(code, (err, userInfo) => {
  //     if (err) {
  //       return console.error(err)
  //     }
  //     // Now you can get the access token, refresh token, and instance URL information.
  //     // Save them to establish connection next time.
  //     console.log(conn.accessToken)
  //     console.log(conn.refreshToken)
  //     console.log(conn.instanceUrl)
  //     console.log('User ID: ' + userInfo.id)
  //     console.log('Org ID: ' + userInfo.organizationId)
  //     res.send('success') // or your desired response
  //   })
  // })

  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

// module.exports = {
//   path: '/api',
//   handler: router
// }
