const { catchAsync } = require("../../utils/asyncWrapper")


exports.getAll = function (Model, options) {
   return catchAsync(async function (request, response, next) {
      let data = null

      if (options) {
         const { qurey } = options
         data = await qurey
      } else {
         data = await Model.find({})
      }

      console.log('GET ALL SUCCESS: ', Model.collection.collectionName)

      response.status(200).send({
         message: `Get all ${Model.collection.collectionName}  success`,
         success: true,
         data: data
      })
   })
}


exports.createOne = function (Model) {
   return catchAsync(async function (request, response, next) {

      const newItem = new Model(request.body)

      const itemSaved = await newItem.save()

      console.log(`CREATE ONE: ${Model.collection.collectionName} `, itemSaved)

      response.status(201).send({
         message: `Create success ${Model.collection.collectionName} `,
         success: true,
         data: itemSaved._id
      })
   })
}


exports.deleteOne = function (Model) {
   return catchAsync(async function (request, response, next) {
      const { id } = request.params

      const deletedItem = await Model.findByIdAndDelete({ _id: id })

      if (!deletedItem) {
         next(new Error(`Item not found: ${Model.collection.collectionName}`))
         return
      }

      console.log(`DELETE ONE: ${Model.collection.collectionName} `, deletedItem)

      response.status(200).send({
         message: `Delete success ${Model.collection.collectionName} `,
         success: true,
         data: id
      })
   })
}

exports.updateOne = function (Model) {
   return catchAsync(async function (request, response, next) {
      const { id } = request.params

      const updatedItem = await Model.findByIdAndUpdate({ _id: id }, request.body, {
         new: true,
         // runValidators: true
      })

      if (!updatedItem) {
         next(new Error(`Item not found: ${Model.collection.collectionName}`))
         return
      }

      console.log(`UPDATE ONE: ${Model.collection.collectionName} `, updatedItem)

      response.status(200).send({
         message: `Update success ${Model.collection.collectionName} `,
         success: true,
         data: id
      })

   })
}

