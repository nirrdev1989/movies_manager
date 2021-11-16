const axiosFactory = require('../data.access.logic/axios/axios.factory')

exports.updateMovie = axiosFactory.update('http://localhost:7799/api/movies/update/')
exports.deleteMovie = axiosFactory.delete('http://localhost:7799/api/movies/delete/')
exports.createMovie = axiosFactory.post('http://localhost:7799/api/movies/add_movie')
exports.allMovies = axiosFactory.get('http://localhost:7799/api/movies/all')

