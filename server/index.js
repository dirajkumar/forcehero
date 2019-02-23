import express from 'express'
import consola from 'consola'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { Nuxt, Builder } from 'nuxt'
import router from './routes'

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

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    httpOnly: false
  })
)

app.use('/', router)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', ALLOWED_HEADERS.join(','))
  res.header('Access-Control-Expose-Headers', 'SForce-Limit-Info')
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
