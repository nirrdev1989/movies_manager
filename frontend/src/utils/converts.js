export function convertArrayToObject(array, key, ...nestedKeys) {
   const obj = {}
   console.log(nestedKeys)

   for (let i = 0; i < array.length; i++) {
      let item = array[i]
      // console.log(item)

      obj[item[key]] = item

      // if(item[nestedKeys])
      // if (item instanceof Array) {
      //    console.log(item, 'IS ARRAY')
      //    // return convertArrayToObject(item, key)
      // }
   }
   console.log(obj)
   return obj
}