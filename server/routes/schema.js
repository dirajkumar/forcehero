import 'dotenv/config'
import jsforce from 'jsforce'
import cookie from 'cookie'

export const objects = async (req, res) => {
  try {
    const cookies = cookie.parse(req.headers['cookie'])
    const accessToken = cookies.accessToken;
    const instanceUrl = cookies.instanceUrl;
    const conn = new jsforce.Connection({ instanceUrl, accessToken });
    const meta = await conn.sobject('Account').describe();
    console.log('ROUTE meta', meta)
    res.send(JSON.stringify(meta))
  } catch (e) {
    console.log('error getting Url=====', e)
  }
}
