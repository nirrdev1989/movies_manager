import React from 'react'
import useForm from '../hooks/useForm'
import { CentredContainer } from '../styles/Containers'
import { FormControlS } from '../styles/FormControl'
import { FromWrapperS } from '../styles/FormWrapper'
import Button from './components-utils/Button'
import NavigateButton from './components-utils/NavigateButton'
import { movies } from '../data/data'
import { formatDateForInput } from '../utils/dates'
import { useParams } from 'react-router'


export default function EditMovieForm({ isEdit }) {
   const params = useParams()

   const { onChange, onSubmit, state, setState } = useForm({
      movieName: '',
      genres: '',
      premired: '',
      imageUrl: ''
   }, callback)

   function callback(values) {
      console.log(values)
   }

   React.useEffect(() => {

      if (isEdit) {
         let currentMovie = movies.find((movie) => movie.id === Number(params.id))
         currentMovie.premired = formatDateForInput(currentMovie.premired)

         setState(() => currentMovie)
      }
   }, [])


   return (
      <CentredContainer>
         <FromWrapperS>
            <h4 style={{ marginBottom: '1rem' }}>{isEdit ? "Edit movie" : 'Add movie'}</h4>
            <form onSubmit={onSubmit} style={{ width: '300px', height: '350px' }}>
               <FormControlS className="form_control">
                  <label>Movie Name</label>
                  <input type="text" name="movieName" onChange={onChange} value={state.movieName} />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>Genres</label>
                  <input type="text" name="genres" onChange={onChange} value={state.genres} />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>Image Url</label>
                  <input type="url" name="imageUrl" onChange={onChange} value={state.imageUrl} />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>Premired</label>
                  <input type="date" name="premired" onChange={onChange} value={state.premired} />
               </FormControlS>
               <div style={{ display: 'flex', justifyContent: 'center' }} >
                  <Button style={{ marginTop: '1rem', marginBottom: '1rem' }} color="green" content="Save" type="submit" />
                  <NavigateButton style={{ marginTop: '1rem', marginBottom: '1rem', color: 'red' }} color="rgb(248, 74, 74)" content="Cancel" url="/main/movies/all" />
               </div>
            </form>
         </FromWrapperS>
      </CentredContainer>
   )
}
