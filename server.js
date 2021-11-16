// const { readFile } = require('jsonfile')
const app = require('./server/app')
// const { wirteFile } = require('./server/data.access.logic/json.file')
const { connectMongoDB } = require('./server/db/db')
const { SubscriptionModel } = require('./server/db/models/subs')
const PORT = process.env.PORT || 6789
connectMongoDB()


async function check() {

   const x = await SubscriptionModel.find({}).populate('memberId')
   console.log(x[0].movies)
}
// check()

app.listen(PORT, () => console.log(`Server run at port: ${PORT}`))
































// const Axios = require('axios')
// const { MovieModel } = require('./server/db/models/movies')
// const { MemberModel } = require('./server/db/models/members')


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

