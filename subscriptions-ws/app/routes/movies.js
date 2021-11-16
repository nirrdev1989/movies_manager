const router = require('express').Router()
const { allMovies, createMovie, deleteMovie, updateMovie } = require('../controllers/movies')
const { authApiKey } = require('../middlewares/auth')

// const { MovieModel } = require('../db/models/movies')

router.get('/all', authApiKey, allMovies)

router.post('/add_movie', authApiKey, createMovie)

router.delete('/delete/:id', authApiKey, deleteMovie)

router.put('/update/:id', authApiKey, updateMovie)

module.exports = router