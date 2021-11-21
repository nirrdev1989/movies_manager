const router = require('express').Router()
const { allMovies, createMovie, deleteMovie, updateMovie } = require('../controllers/movies')
const { authUser } = require('../middelwares/auth')
// const { MovieModel } = require('../db/models/movies')
const { validate } = require('../middelwares/validate')
const validators = require('../utils/validators')

router.get('/all', authUser, allMovies)

router.post('/add_movie', [
   validators.stringProperty('movieName'),
   validators.stringProperty('imageUrl'),
   validators.stringProperty('premiered'),
   validators.arrayProperty('genres'),

], validate, authUser, createMovie)

router.delete('/delete/:id', authUser, deleteMovie)

router.put('/update/:id', authUser, updateMovie)

module.exports = router