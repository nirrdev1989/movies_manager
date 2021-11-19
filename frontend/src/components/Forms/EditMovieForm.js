import useForm from '../../hooks/useForm'
import { CentredContainer } from '../../styles/Containers'
import { FormControlS } from '../../styles/FormControl'
import { FromWrapperS } from '../../styles/FormWrapper'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'
import { useParams } from 'react-router'
import { addMovieAction, updateMovieAction } from '../../redux/movies/actions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
// import { formatDateForInput } from '../../utils/dates'


function EditMovieForm({ isEdit, movies, addMovie, updateMovie }) {
   const params = useParams()

   const { onChange, onSubmit, state, setState } = useForm({
      movieName: '',
      genres: '',
      premiered: '',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Movies_Coverart.jpg/220px-The_Movies_Coverart.jpg'
   }, callback)

   function callback(values) {
      if (typeof values.genres === 'string') {
         values.genres = values.genres.split(',')
      }
      if (isEdit) {
         updateMovie(values._id, values, Number(params.id))
      } else {
         addMovie(values)
      }
   }

   useEffect(() => {
      if (isEdit) {
         setState(() => movies[Number(params.id)])
      }
   }, [])


   return (
      <CentredContainer>
         <FromWrapperS>
            <h4 style={{ marginBottom: '1rem' }}>{isEdit ? "Edit movie" : 'Add movie'}</h4>
            <form onSubmit={onSubmit} style={{ width: '300px', height: '350px' }}>
               <FormControlS className="form_control">
                  <label>Movie Name</label>
                  <input
                     ype="text"
                     name="movieName"
                     onChange={onChange}
                     value={state.movieName}
                     required={true}
                     maxLength={50}
                  />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>Genres</label>
                  <input
                     type="text"
                     name="genres"
                     onChange={onChange}
                     value={state.genres}
                     required={true}
                  />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>Image Url</label>
                  <input
                     type="url"
                     name="imageUrl"
                     onChange={onChange}
                     value={state.imageUrl}
                     required={true}
                  />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>Premiered</label>
                  <input
                     type="date"
                     name="premiered"
                     onChange={onChange}
                     value={state.premiered}
                     required={true}
                  />
               </FormControlS>
               <div style={{ display: 'flex', justifyContent: 'center' }} >
                  <Button
                     style={{ marginTop: '1rem', marginBottom: '1rem' }}
                     color="green"
                     content="Save"
                     type="submit"
                  />
                  <NavigateButton
                     style={{ marginTop: '1rem', marginBottom: '1rem', color: 'red' }}
                     color="rgb(248, 74, 74)"
                     content="Cancel"
                     url="/main/movies/all"
                  />
               </div>
            </form>
         </FromWrapperS>
      </CentredContainer>
   )
}

function mapStateToProps(state) {
   return {
      loading: state.movies.loading,
      error: state.movies.error,
      movies: state.movies.movies
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addMovie: (data) => dispatch(addMovieAction(data)),
      updateMovie: (id, data, index) => dispatch(updateMovieAction(id, data, index))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieForm)