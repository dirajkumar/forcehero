import Cookie from 'js-cookie'

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
  const code = Buffer.from(codeCookie.split('=')[1], 'base64')
  return JSON.parse(code)
}

export const setSecret = secret =>
  window.sessionStorage.setItem('secret', secret)

export const getSecret = () => {
  if (process.server) return
  return window.sessionStorage.getItem('secret')
}

export const verifySecret = secret => window.sessionStorage.secret === secret
