import React from 'react'
import styled from 'styled-components'
import { deleteMovieAction, getMoviesAction } from '../../redux/movies/actions'
import { connect } from 'react-redux'
import MovieItem from './MovieItem'
import { useParams } from 'react-router'
// import Loader from '../Loader/Loader'

function MoviesList({ getMovies, movies, deleteMovie, currentUser, history }) {
   const { id } = useParams()

   function onDelete(id) {
      deleteMovie(id)
   }

   React.useEffect(() => {
      if (!movies) {
         getMovies()
      }
   }, [])

   function renderMovieItem(movie, i) {
      return <MovieItem key={movie._id} onDelete={onDelete} movie={movie} index={i} currentUser={currentUser} />
   }

   return (
      <Container>
         {movies && movies.map((movie, i) => {
            if (history.location.pathname.includes('search')) {
               let lowerMovieName = movie.movieName.toLowerCase()
               let lowerSearchParam = history.location.search.split('?')[1].toLowerCase()

               if (lowerMovieName.includes(lowerSearchParam)) {
                  return (
                     renderMovieItem(movie, i)
                  )
               }
               return null
            }
            else if (id) {
               if (id === movie._id) {
                  return renderMovieItem(movie, i)
               }
               return null
            }
            return (
               renderMovieItem(movie, i)
            )
         })}
      </Container>
   )
}

function mapStateToProps(state) {
   return {
      // loading: state.movies.loading,
      movies: state.movies.movies,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getMovies: () => dispatch(getMoviesAction()),
      deleteMovie: (id) => dispatch(deleteMovieAction(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)

export const Container = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap:1rem;
   margin-top: 1rem;
   padding-bottom: 3rem;
`

