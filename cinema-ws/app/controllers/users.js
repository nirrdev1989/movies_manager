const { getUsersJson, addUserJson, addPremmisionsJson, deleteUserJson, updateUserJson } = require("../data.access.logic/json-files/json.users");
const { UserModel } = require("../db/models/users");
const { catchAsync } = require("../utils/asyncWrapper");
const { comparePassword, hashPassword } = require("../utils/hashPassword");


exports.allUsers = catchAsync(async function (request, response, next) {

   const users = await getUsersJson()

   response.status(200).send({
      success: true,
      message: 'Get users Success',
      data: users
   })
})

exports.createUser = catchAsync(async function (request, response, next) {
   const { firstName, lastName, userName, createdDate, sessionTimeOut, premissions } = request.body

   const checkUserExsit = await UserModel.findOne({ userName: userName })
   if (checkUserExsit) {
      return next(new Error(`User exsist`))
   }
   const newUser = new UserModel({ userName: userName })

   const userSaved = await newUser.save()

   const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      _id: userSaved._id,
      createdDate: createdDate,
      sessionTimeOut: sessionTimeOut
   }

   const userPremissions = {
      _id: userSaved._id,
      premissions: premissions
   }

   await Promise.all([addUserJson(user), addPremmisionsJson(userPremissions)])

   response.status(200).send({
      success: true,
      message: 'Create user Success',
      data: userSaved._id
   })

})

exports.deleteUser = catchAsync(async function (request, response, next) {
   const { id } = request.params
   console.log(id)

   const [userDleted, userDeletedDb] = await Promise.all([deleteUserJson(id), UserModel.findByIdAndDelete({ _id: id })])

   console.log('USER DELETED JSON: ', 'USER DELETED DB: ')

   response.status(200).send({
      success: true,
      message: 'Delete user Success',
      data: id
   })
})

exports.updateUser = catchAsync(async function (request, response, next) {
   const { id } = request.params
   console.log(id)

   const userUpdated = await Promise.all(
      [
         updateUserJson(id, request.body),
         UserModel.findByIdAndUpdate({ _id: id }, { userName: request.body.userName }, { new: true })
      ]
   )

   console.log(userUpdated)
   response.status(200).send({
      success: true,
      message: 'Update user Success',
      data: id
   })
})

exports.changePassword = catchAsync(async function (request, response, next) {

   const { oldPassword, newPassword } = request.body

   const foundUser = await UserModel.findOne({ _id: request.userData._id })
   // console.log(foundUser)
   if (!foundUser) {
      return next(new Error('Auth fail'))
   }

   const isMatch = await comparePassword(oldPassword, foundUser.password)

   if (!isMatch) {
      return next(new Error('Wrong password'))
   }

   foundUser.password = await hashPassword(newPassword)

   await foundUser.save()

   response.status(200).send({
      success: true,
      message: 'Change password success',
      data: null
   })
})
