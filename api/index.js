import 'dotenv/config'
import jsforce from 'jsforce'
import express from 'express'

const app = express()

app.get('/callback', async (req, res) => {
  console.log('req.query.state==', req.query.state)
  console.log('req.query.code==', req.query.code)
  const decodedBuffer = new Buffer(req.query.state, 'base64')
  const { secret, baseUrl } = JSON.parse(decodedBuffer.toString('ascii'))
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
    console.log('err==', err)
    if (err) {
      res.redirect('http://localhost:3000/error')
    }
    console.log('Access Token: ' + conn.accessToken)
    console.log('Instance URL: ' + conn.instanceUrl)
    console.log('refreshToken: ' + conn.refreshToken)
    console.log('UserInfo: ' + JSON.stringify(userInfo))

    const data = {
      instanceUrl: conn.instanceUrl,
      user: userInfo,
      token: conn.accessToken,
      secret
    }

    const encodedBuffer = new Buffer(JSON.stringify(data))
    const base64data = encodedBuffer.toString('base64')

    console.log('code===', JSON.stringify(data))
    res.redirect('http://localhost:3000/home?code=' + base64data)
  })
  console.log('callback end')
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
