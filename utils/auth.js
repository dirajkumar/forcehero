import Cookie from 'js-cookie'
import { decrypt } from './crypt'

export const setCode = () => {
  if (process.server) return

  const base64Session = Cookie.get('session') || null
  if (!base64Session) return

  const baseObj = window.atob(base64Session) || null
  if (!baseObj) return

  const data = JSON.parse(baseObj)['code'] || null
  if (!data) return

  const code = decrypt(data)
  window.sessionStorage.setItem('code', code)
}

export const getCode = () => {
  if (process.server) return null

  return window.sessionStorage.getItem('code') || null
}

export const removeCode = () => {
  window.sessionStorage.removeItem('code')
}
