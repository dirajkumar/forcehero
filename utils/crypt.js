const crypto = require('crypto')
const alg = 'aes-256-cbc'
const key = 'd6F3Efeq21hjy6234hu47yh24823'
export const encrypt = text => {
  if (!text) return null
  var cipher = crypto.createCipher(alg, key)
  var crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}

export const decrypt = text => {
  if (!text) return null
  var decipher = crypto.createDecipher(alg, key)
  var dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8')
  return dec
}
