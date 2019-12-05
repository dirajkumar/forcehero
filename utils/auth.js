export const setCode = code => {
  if (process.server) return

  const baseObj = window.atob(code) || null
  if (!baseObj) return

  // const token = JSON.parse(baseObj)['token'] || null
  // const user = JSON.parse(baseObj)['user'] || null
  // const instanceUrl = JSON.parse(baseObj)['instanceUrl'] || null

  // window.sessionStorage.setItem('token', token)
  // window.sessionStorage.setItem('user', user)
  // window.sessionStorage.setItem('instanceUrl', instanceUrl)
}

export const getCode = () => {
  if (process.server) return null

  return window.sessionStorage.getItem('token') || null
}

export const getInstanceUrl = () => {
  if (process.server) return null

  return window.sessionStorage.getItem('instanceUrl') || null
}

export const getUser = () => {
  if (process.server) return null

  return window.sessionStorage.getItem('user') || null
}

export const removeCode = () => {
  window.sessionStorage.removeItem('token')
}
