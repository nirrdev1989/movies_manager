const app = require('./app/app')
const { connectMongoDB } = require('./app/db/db')
const PORT = process.env.PORT || 6789
connectMongoDB('mongodb://127.0.0.1:27017/movies_manager_cinema')
// const { UserModel } = require('./app/db/models/users')




// UserModel.create({
//    userName: 'vv',
//    password: '12345'
// }).then((x) => {
//    console.log(x)
// })

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

