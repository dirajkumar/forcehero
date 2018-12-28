import jsforce from 'jsforce'
import { getCode } from '~/utils/auth'

// class SF {
//   constructor() {
//     this._conn = { token: null, instanceUrl: null }
//   }

//   connection({ token, instanceUrl }) {
//     if (process.server) return this._conn

//     if (!SF.instance._conn.token) {
//       this._conn = new jsforce.Connection({
//         accessToken: token,
//         instanceUrl
//       })
//       SF.instance = this
//     }

//     return SF.instance._conn
//   }
// }

// const instance = new SF()
// // Object.freeze(instance)

// export default instance
