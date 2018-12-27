import 'dotenv/config'
import jsforce from 'jsforce'
import express from 'express'
import queryString from 'query-string'
import uuid from 'uuid'

const app = express()

app.use((error, req, res, next) => {
  console.log('500=====', e)
  res.redirect(process.env.APP_URL + '/errors/unknown')
})

app.get('/loginInfo', async (req, res) => {
  try {
    let baseUrl = process.env.SF_PROD_URL

    if (req.query.orgType === 'SANDBOX') {
      baseUrl = process.env.SF_SANDBOX_URL
    }

    const secret = uuid.v4()

    let state = { secret, baseUrl }
    state = Buffer.from(JSON.stringify(state)).toString('base64')

    const params = {
      redirect_uri: process.env.APP_URL + process.env.SF_REDIRECT_PATH,
      response_type: process.env.SF_RESPONSE_TYPE,
      client_id: process.env.SF_CLIENT_ID,
      scope: process.env.SF_SCOPE,
      state
    }

    res.json({
      loginUrl:
        baseUrl +
        process.env.SF_OAUTH_PATH +
        '?' +
        queryString.stringify(params),
      secret: Buffer.from(JSON.stringify(secret)).toString('base64')
    })
  } catch (e) {
    console.log('error getting Url=====', e)
    res.status(500)
  }
})

app.get('/callback', async (req, res) => {
  try {
    const state = Buffer.from(req.query.state, 'base64')
    const { secret, baseUrl } = JSON.parse(state)
    const code = req.query.code

    const oauth2 = new jsforce.OAuth2({
      loginUrl: baseUrl,
      clientId: process.env.SF_CLIENT_ID,
      clientSecret: process.env.SF_CLIENT_SECRET,
      redirectUri: process.env.APP_URL + '/auth/callback'
    })

    const conn = new jsforce.Connection({
      oauth2: oauth2
    })

    await conn.authorize(code, (err, userInfo) => {
      if (err) {
        res.redirect(process.env.APP_URL + '/errors/unauth')
      }

      const data = {
        instanceUrl: conn.instanceUrl,
        user: userInfo,
        token: conn.accessToken,
        secret
      }

      const base64data = Buffer.from(JSON.stringify(data)).toString('base64')

      res.redirect(process.env.APP_URL + '/validate/session?code=' + base64data)
    })
  } catch (e) {
    console.log('error getting callback=====', e)
    res.status(500)
  }
})

// app.get('/logout', async (req, res) => {
//   console.log('req.session.user==', JSON.stringify(req.session.user))
//   if (!req.session.user) {
//     res.redirect('http://localhost:3000/')
//   }
//   const conn = new jsforce.Connection({
//     sessionId: req.session.user.accessToken,
//     serverUrl: req.session.user.instanceUrl
//   })
//   delete req.session.user

//   await conn.logout(err => {
//     if (err) {
//       return console.error(err)
//     }
//     res.redirect('http://localhost:3000/')
//   })
// })

module.exports = {
  path: '/auth',
  handler: app
}
