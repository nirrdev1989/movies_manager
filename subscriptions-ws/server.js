const app = require('./app/app')
const { connectMongoDB } = require('../cinema-ws/app/db/db')
const PORT = process.env.PORT || 7799
connectMongoDB('mongodb://127.0.0.1:27017/movies_manager_cinema_subscriptions')

const { SubscriptionModel } = require('./app/db/models/subs')
const { MemberModel } = require('./app/db/models/members')
const { MovieModel } = require('./app/db/models/movies')


async function check() {
   const data = await MovieModel.aggregate([
      {
         $lookup: {
            from: "subscriptions",
            foreignField: "movies.movieId",
            localField: "_id",
            as: 'subs'
         },
      },
      {
         $lookup: {
            from: "members",
            foreignField: "_id",
            localField: "subs.memberId",
            as: 'movieSubs'
         }
      },
   ])
   // const data = await MemberModel.aggregate([
   //    {
   //       $lookup: {
   //          from: "subscriptions",
   //          foreignField: "memberId",
   //          localField: "_id",
   //          as: 'subs'
   //       },
   //    },
   //    {
   //       $lookup: {
   //          from: "movies",
   //          foreignField: "_id",
   //          localField: "subs.movies.movieId",
   //          as: 'memberMovies'
   //       }
   //    },
   //    {
   //       $project: {
   //          _id: 1,
   //          memberName: 1,
   //          email: 1,
   //          city: 1,
   //          memberMovies: 1
   //       }
   //    }

   //    // {
   //    //    $lookup: {
   //    //       from: "movies",
   //    //       localField: "movies._id",
   //    //       foreignField: "_id",
   //    //       as: 'subss'
   //    //    },
   //    // },
   // ])
   // console.log(data)

   for (const d of data) {
      if (d.subs.length > 0) {
         console.log(d)
      }
   }



}
// check()

app.listen(PORT, () => console.log(`Server run at port: ${PORT}`))



// const Axios = require('axios')
// const { MovieModel } = require('./app/db/models/movies')
// const { MemberModel } = require('./app/db/models/members')


// async function setMembers() {
//    const members = await Axios({
//       url: 'https://jsonplaceholder.typicode.com/users',
//       method: 'GET'
//    })

//    console.log(members.data[0])

//    for (const member of members.data) {
//       const newMember = await new MemberModel({
//          memberName: member.name,
//          email: member.email,
//          city: member.address.city,
//          // premiered: movie.premiered
//       })

//       await newMember.save()
//    }
// }

// async function setMovies() {

//    const movies = await Axios({
//       url: 'https://api.tvmaze.com/shows',
//       method: 'GET'
//    })

//    console.log(movies.data[0])

//    for (let i = 0; i < 100; i++) {
//       let m = movies.data[i]

//       const newMovie = await new MovieModel({
//          imageUrl: m.image.original,
//          movieName: m.name,
//          genres: m.genres,
//          premiered: m.premiered
//       })

//       await newMovie.save()
//    }

// }

// setMembers()
// setMovies()
