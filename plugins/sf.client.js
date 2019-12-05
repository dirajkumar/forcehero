import jsforce from 'jsforce'
import { getCode, getInstanceUrl } from '../utils/auth'

export default async (ctx, inject) => {
  const token = getCode()
  const instanceUrl = getInstanceUrl()
  console.log('SF token===', token)
  let sf = null
  if (token) {
    sf = new jsforce.Connection({
      accessToken: token,
      instanceUrl: instanceUrl
    })
    try {
      const res = await sf.identity()
      console.log('user ID: ' + res.user_id)
      console.log('organization ID: ' + res.organization_id)
      console.log('username: ' + res.username)
      console.log('display name: ' + res.display_name)
    } catch (e) {
      console.log('e=== ' + e)
      sf = null
      ctx.redirect('/errors/session')
    }
  }
  inject('sf', sf)
  ctx.$sf = sf
}
