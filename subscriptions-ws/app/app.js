const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const { handelError } = require('../../cinema-ws/app/middelwares/error');

const app = express()

app.set('trust proxy', 1);

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({
   origin: 'http://localhost:6789',
   credentials: true,
}))

app.use((request, response, next) => {
   console.log(`
   SUBSCRIPTIONS SERVER
   URL: ${request.url}
   METHOD: ${request.method}
   TIME: ${new Date().toLocaleDateString()}`)
   request.serverData = {
      serverName: 'SUBSCRIPTIONS'
   }
   next()
})


app.use('/api/movies', require('./routes/movies'))
app.use('/api/members', require('./routes/members'))
app.use('/api/subs', require('./routes/subs'))

app.use(handelError)


module.exports = app