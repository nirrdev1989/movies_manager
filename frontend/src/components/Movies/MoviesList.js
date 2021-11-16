import React from 'react'
import styled from 'styled-components'
import { deleteMovieAction, getMoviesAction } from '../../redux/movies/actions'
import { connect } from 'react-redux'
import MovieItem from './MovieItem'
import { useHistory } from 'react-router'
// import Loader from '../Loader/Loader'

function MoviesList({ loading, getMovies, movies, deleteMovie }) {
   const history = useHistory()

   function onDelete(id) {
      deleteMovie(id)
   }

   React.useEffect(() => {
      if (!movies.length) {
         getMovies()
      }
   }, [])
   console.log(history)
   return (
      <Container>
         {/* {loading && <Loader />} */}
         {movies && movies.map((movie) => {
            if (history.location.pathname.includes('search')) {
               let lowerMovieName = movie.movieName.toLowerCase()
               let lowerSearchParam = history.location.search.split('?')[1].toLowerCase()

               if (lowerMovieName.includes(lowerSearchParam)) {
                  return (
                     <MovieItem key={movie._id} onDelete={onDelete} movie={movie} />
                  )
               } else {
                  return null
               }
            }
            return (
               <MovieItem key={movie._id} onDelete={onDelete} movie={movie} />
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