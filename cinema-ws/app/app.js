const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const { handelError } = require('./middelwares/error');

const app = express()

app.set('trust proxy', 1);

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true,
}))

app.use((request, response, next) => {
   console.log(`
   CINEMA SERVER
   URL: ${request.url}
   METHOD: ${request.method}
   TIME: ${new Date().toLocaleDateString()}`)
   request.serverData = {
      serverName: 'CINEMA'
   }
   next()
})


app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/members', require('./routes/members'))
app.use('/api/subs', require('./routes/subs'))

app.use(handelError)


module.exports = app