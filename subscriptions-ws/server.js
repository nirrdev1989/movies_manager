const app = require('./app/app')
const { connectMongoDB } = require('../cinema-ws/app/db/db')
const PORT = process.env.PORT || 7799
connectMongoDB('mongodb://127.0.0.1:27017/movies_manager_cinema_subscriptions')

// const { SubscriptionModel } = require('./app/db/models/subs')

// async function check() {

//    const x = await SubscriptionModel.find({}).populate('memberId')
//    console.log(x[0].movies)
// }
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
