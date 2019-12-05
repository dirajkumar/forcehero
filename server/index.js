import 'dotenv/config'
import express from 'express'
import cookieSession from 'cookie-session'
import cookieParser from 'cookie-parser'
import consola from 'consola'
import bodyParser from 'body-parser'
import { Nuxt, Builder } from 'nuxt'
import router from './router'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const ALLOWED_HEADERS = [
  'Authorization',
  'Content-Type',
  'Salesforceproxy-Endpoint',
  'X-Authorization',
  'X-SFDC-Session',
  'SOAPAction',
  'SForce-Auto-Assign',
  'If-Modified-Since',
  'X-User-Agent'
]

app.set('port', port)

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.use('/', router)

app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.CIPHER_KEY],

    // Cookie Options
    maxAge: 60 * 1000,
    domain: process.env.APP_URL
  })
)

app.use(cookieParser())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', ALLOWED_HEADERS.join(','))
  res.header('Access-Control-Expose-Headers', 'SForce-Limit-Info')
  res.header('Access-Control-Allow-Credentials', 'true')
  if (req.method === 'OPTIONS') {
    res.end()
    return
  }
  next()
})

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

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
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
