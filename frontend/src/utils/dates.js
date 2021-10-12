

export function formatDateForInput(date) {
   // new Date().toISOString()
   // '2021-10-12T05:20:29.496Z'
   //"2013-01-08"

   return new Date(date).toISOString().split('T')[0]
   // console.log(newDate)


   // let newDate = new Date(date)
   // // let year = newDate.getFullYear()
   // // let mount = newDate.getMonth() + 1
   // // let day = newDate.getDate()

   // // if (mount < 10) mount = "0" + mount
   // // if (day < 10) day = "0" + day
   // // console.log(year, mount, day)

   // // return year + "-" + mount + "-" + day
}