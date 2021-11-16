const router = require('express').Router()
const { allMovies, createMovie, deleteMovie, updateMovie } = require('../controllers/movies')
const { authUser } = require('../middelwares/auth')
// const { MovieModel } = require('../db/models/movies')

router.get('/all', authUser, allMovies)

router.post('/add_movie', authUser, createMovie)

router.delete('/delete/:id', authUser, deleteMovie)

router.put('/update/:id', authUser, updateMovie)

module.exports = router