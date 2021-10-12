import React from 'react'
import AuthForm from '../components/AuthForm'

export default function HomePage({ history }) {
   return (
      <div>
         <AuthForm isRegisterForm={history.location.pathname === '/register'} />
      </div>
   )
}
