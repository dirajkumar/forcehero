import jsforce from 'jsforce'
import cookie from 'cookie'
import { decrypt } from '../utils/crypt'
import { getCode, setCode } from '@/utils/auth'

export default (ctx, inject) => {
  let sf = null
  setCode()
  const code = getCode()
  console.log('SF data===', code)
  debugger
  if (code) {
    const data = JSON.parse(code)
    sf = new jsforce.Connection({
      accessToken: data.token,
      instanceUrl: data.instanceUrl
    })
  }
  inject('sf', sf)
  ctx.$sf = sf
}
