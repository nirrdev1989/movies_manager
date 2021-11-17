import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import useForm from '../../hooks/useForm'
import { getMoviesAction } from '../../redux/movies/actions'
import { addSubAction } from '../../redux/subs/actions'
import { FormControlS } from '../../styles/FormControl'
import Button from '../components-utils/Button'

function AddSubForm({ member, movies, getMovies, addSub }) {

   const { state, onChange, onSubmit } = useForm({
      movieId: '',
      dateWatched: ''
   }, callback)

   function callback(values) {
      values.memberId = member._id
      addSub(values)
   }

   useEffect(() => {
      if (!movies) {
         getMovies()
      }
   }, [])


   return (
      <form onSubmit={onSubmit} >
         <h5 style={{ textAlign: 'center' }} >Subscribe Movie</h5>
         <select
            style={{ height: '30px', marginBottom: '0.5rem' }}
            type="text"
            name="movieId"
            onChange={onChange}
            value={state.nameMovie}
            required={true}
         >
            <option disabled={true} selected={true} value={null}>Choose a movie</option>
            {movies && movies.map((movie) => {
               return (
                  <option
                     disabled={member.memberMovies.find((m) => m._id === movie._id)}
                     key={movie._id}
                     value={movie._id}
                  >
                     {movie.movieName}
                  </option>
               )
            })}
         </select>
         <FormControlS className="form_control" style={{ height: 'auto' }}>
            <input
               type="date"
               name="dateWatched"
               onChange={onChange}
               value={state.dateWatched}
               required={true}
            />
         </FormControlS>
         <Button type="submit" bg="rgb(34, 238, 170)" content="Add" />
      </form>
   )
}

function mapStateToProps(state) {
   return {
      movies: state.movies.movies
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addSub: (data) => dispatch(addSubAction(data)),
      getMovies: () => dispatch(getMoviesAction()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubForm)