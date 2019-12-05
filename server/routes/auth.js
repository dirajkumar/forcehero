import 'dotenv/config'
import jsforce from 'jsforce'
import queryString from 'query-string'

export const login = async (req, res) => {
  try {
    let baseUrl = process.env.SF_PROD_URL

    if (req.query.orgType === 'SANDBOX') {
      baseUrl = process.env.SF_SANDBOX_URL
    }

    let state = {
      baseUrl
    }
    state = Buffer.from(JSON.stringify(state)).toString('base64')

    const params = {
      redirect_uri: process.env.APP_URL + process.env.SF_REDIRECT_PATH,
      response_type: process.env.SF_RESPONSE_TYPE,
      client_id: process.env.SF_CLIENT_ID,
      scope: process.env.SF_SCOPE,
      state
    }

    const data = {
      loginUrl:
        baseUrl +
        process.env.SF_OAUTH_PATH +
        '?' +
        queryString.stringify(params)
    }

    res.send(JSON.stringify(data))
  } catch (e) {
    console.log('error getting Url=====', e)
  }
}

export const callback = async (req, res) => {
  try {
    const state = Buffer.from(req.query.state, 'base64')
    const { baseUrl } = JSON.parse(state)
    const code = req.query.code

    const oauth2 = new jsforce.OAuth2({
      loginUrl: baseUrl,
      clientId: process.env.SF_CLIENT_ID,
      clientSecret: process.env.SF_CLIENT_SECRET,
      redirectUri: process.env.APP_URL + process.env.SF_REDIRECT_PATH
    })

    const conn = new jsforce.Connection({
      oauth2: oauth2
    })

    const userInfo = await conn.authorize(code)
    const data = {
      instanceUrl: conn.instanceUrl,
      user: userInfo,
      token: conn.accessToken
    }
    console.log('data===', JSON.stringify(data))

    const token = Buffer.from(JSON.stringify(data)).toString('base64')
    
    res.cookie('accessToken', conn.accessToken, { httpOnly: true })
    res.cookie('instanceUrl', conn.instanceUrl, { httpOnly: true })

    res.redirect(process.env.APP_URL + '/validate/session?token=' + token)
  } catch (err) {
    console.log('err==', err)
    res.redirect(process.env.APP_URL + '/errors/unknown')
    return
  }
}

export const logout = async (req, res) => {
  try {
    console.log('code===', req.query.code)
    const data = req.query.code
    const { accessToken, instanceUrl } = JSON.parse(data)
    console.log('accessToken===', accessToken)
    console.log('instanceUrl===', instanceUrl)
    const conn = new jsforce.Connection({
      sessionId: accessToken,
      serverUrl: instanceUrl
    })
    req.session = null
    await conn.logout(err => (err) ? console.error(err) : console.log('successfuully logged out'))
  } catch (e) {
    console.log('error getting callback=====', e)
  }
}
