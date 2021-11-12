import React from 'react'
import { useRouteMatch } from 'react-router'
import EditMovieForm from '../components/EditMovieForm'

export default function EditMoviePage() {
   const { url } = useRouteMatch()

   return (
      <div>
         <EditMovieForm isEdit={url.includes('edit_movie')} />
      </div>
   )
}