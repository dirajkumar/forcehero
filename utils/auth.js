import uuid from 'uuid'
import queryString from 'query-string'
import Cookie from 'js-cookie'
import {
  SF_PROD_URL,
  SF_SANDBOX_URL,
  APP_URL,
  SF_REDIRECT_PATH,
  SF_OAUTH_PATH,
  SF_RESPONSE_TYPE,
  SF_SCOPE,
  SF_CLIENT_ID
} from './constants'

export const getSalesforceAuthUrl = isSandbox => {
  const baseUrl = isSandbox == true ? SF_SANDBOX_URL : SF_PROD_URL

  const secret = uuid.v4()
  setSecret(secret)

  let state = JSON.stringify({
    secret,
    baseUrl
  })
  state = window.btoa(state)

  const params = {
    redirect_uri: APP_URL + SF_REDIRECT_PATH,
    response_type: SF_RESPONSE_TYPE,
    client_id: SF_CLIENT_ID,
    scope: SF_SCOPE,
    state
  }
  return baseUrl + SF_OAUTH_PATH + '?' + queryString.stringify(params)
}

export const setCode = code => {
  if (process.server) return

  window.sessionStorage.setItem('code', code)
  Cookie.set('fh-code', code)
}

export const removeCode = () => {
  if (process.server) return
  window.sessionStorage.removeItem('code')
  window.sessionStorage.removeItem('secret')
  Cookie.remove('fh-code')
  window.sessionStorage.setItem('logout', Date.now())
}

export const getCode = () => {
  debugger
  const code = window.sessionStorage.getItem('code')
  if (code) {
    return JSON.parse(window.atob(code))
  }
  return null
}

export const getCodeFromCookie = req => {
  if (!req.headers.cookie) return
  const codeCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('fh-code='))
  if (!codeCookie) return
  console.log('codeCookie===', codeCookie)
  const decodedBuffer = new Buffer(codeCookie.split('=')[1], 'base64')
  return JSON.parse(decodedBuffer.toString('ascii'))
}

export const setSecret = secret =>
  window.sessionStorage.setItem('secret', secret)

export const getSecret = () => {
  if (process.server) return
  return window.sessionStorage.getItem('secret')
}

export const verifySecret = secret => window.sessionStorage.secret === secret
