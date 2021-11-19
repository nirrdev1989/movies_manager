const bcrypt = require('bcrypt')

async function hashPassword(password) {
   const hash = await bcrypt.hash(password, 10)

   return hash
}

async function comparePassword(password, userPassword) {
   const isMatch = await bcrypt.compare(password, userPassword)

   return isMatch
}

module.exports = {
   hashPassword,
   comparePassword
}