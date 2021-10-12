import React from 'react'
import { useRouteMatch } from 'react-router'
import EditUserForm from '../components/EditUserForm'

export default function EditUserPage() {
   const { url } = useRouteMatch()

   return (
      <div>
         <EditUserForm isEdit={url.includes('edit_user')} />
      </div>
   )
}
