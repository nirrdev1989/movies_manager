import React from 'react'
import { useRouteMatch } from 'react-router'
import EditMemberForm from '../components/Forms/EditMemberForm'
import EditMovieForm from '../components/Forms/EditMovieForm'
import EditUserForm from '../components/Forms/EditUserForm'


export default function EditSubPage() {
   const { url } = useRouteMatch()

   function renderForm() {
      if (url.includes('users')) {
         return <EditUserForm isEdit={url.includes('edit_user')} />
      }
      else if (url.includes('subscriptions')) {
         return <EditMemberForm isEdit={url.includes('edit_member')} />
      }
      else if (url.includes('movies')) {
         return <EditMovieForm isEdit={url.includes('edit_movie')} />
      }
   }

   return (
      <div>
         {renderForm()}
      </div>
   )
}
