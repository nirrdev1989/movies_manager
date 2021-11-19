const { readFile, wirteFile } = require('./json.file');

const jsonUsersPath = '/../../data/users.json'
const jsonPremmisionsPath = '/../../data/premmisions.json'

async function addUserJson(user) {
   try {
      const data = await readFile(jsonUsersPath)
      data.users[user._id] = user

      await wirteFile(jsonUsersPath, data)

      return true
   } catch (error) {
      throw new Error('Error')
   }
}

async function addPremmisionsJson(pres) {
   try {
      const data = await readFile(jsonPremmisionsPath)
      data.premissions[pres._id] = pres

      await wirteFile(jsonPremmisionsPath, data)

      return true
   } catch (error) {
      throw new Error('Error')
   }
}

async function deleteUserJson(id) {
   try {
      const [usersData, premmisionsData] = await Promise.all(
         [readFile(jsonUsersPath), readFile(jsonPremmisionsPath)]
      )

      delete usersData.users[id]
      delete premmisionsData.premissions[id]

      await Promise.all(
         [wirteFile(jsonUsersPath, usersData), wirteFile(jsonPremmisionsPath, premmisionsData)]
      )

      return true

   } catch (error) {
      throw new Error('Error')
   }
}

async function getUsersJson() {
   try {
      const [usersData, premmisionsData] = await Promise.all(
         [readFile(jsonUsersPath), readFile(jsonPremmisionsPath)]
      )

      let data = []

      for (const userId of Object.keys(usersData.users)) {
         data.push({
            ...usersData.users[userId],
            premissions: premmisionsData.premissions[userId].premissions
         })
      }

      return data
   } catch (error) {
      throw new Error('Error')
   }
}


async function updateUserJson(id, data) {

   try {
      const [usersData, premmisionsData] = await Promise.all(
         [readFile(jsonUsersPath), readFile(jsonPremmisionsPath)]
      )

      const { premissions, ...rest } = data


      usersData.users[id] = {
         _id: id,
         ...rest
      }

      premmisionsData.premissions[id] = {
         _id: id,
         premissions: premissions
      }


      await Promise.all(
         [wirteFile(jsonUsersPath, usersData), wirteFile(jsonPremmisionsPath, premmisionsData)]
      )

      return true

   } catch (error) {
      throw new Error('Error')
   }
}


async function getUserJson(id) {
   try {
      const [usersData, premmisionsData] = await Promise.all(
         [readFile(jsonUsersPath), readFile(jsonPremmisionsPath)]
      )

      const user = {
         ...usersData.users[id],
         ...premmisionsData.premissions[id]
      }

      return user
   } catch (error) {
      throw new Error('Error')
   }
}

module.exports = {
   addUserJson,
   addPremmisionsJson,
   getUsersJson,
   deleteUserJson,
   updateUserJson,
   getUserJson
}