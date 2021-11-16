const jsonFile = require('jsonfile')

function readFile(path) {
   return new Promise((resolve, reject) => {
      jsonFile.readFile(__dirname + path, (error, result) => {
         if (error) {
            console.log(error)
            reject(false)
         } else {
            resolve(result)
         }
      })
   })
}

function wirteFile(path, data) {
   return new Promise((resolve, reject) => {
      jsonFile.writeFile(__dirname + path, data, (error) => {
         if (error) {
            console.log(error)
            reject(false)
         } else {
            resolve(true)
         }
      })
   })
}



module.exports = {
   readFile,
   wirteFile
}