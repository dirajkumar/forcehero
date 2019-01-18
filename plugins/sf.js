import jsforce from 'jsforce'
import cookie from 'cookie'
import { decrypt } from '../utils/crypt'
import { setCode, getCode } from '../utils/auth'

export default async (ctx, inject) => {
  setCode()
  const code = getCode()
  console.log('SF code===', code)
  let sf = null
  if (code) {
    const data = JSON.parse(code)
    console.log('SF data===', data)
    sf = new jsforce.Connection({
      accessToken: data.token,
      instanceUrl: data.instanceUrl,
      proxyUrl: 'https://node-salesforce-proxy.herokuapp.com/proxy/'
    })
    // try {
    //   const res = await sf.identity()
    //   console.log('user ID: ' + res.user_id)
    //   console.log('organization ID: ' + res.organization_id)
    //   console.log('username: ' + res.username)
    //   console.log('display name: ' + res.display_name)
    // } catch (e) {
    //   console.log('e=== ' + e)
    //   sf = null
    //   ctx.redirect('/errors/session')
    // }
  }
  inject('sf', sf)
  ctx.$sf = sf
}
