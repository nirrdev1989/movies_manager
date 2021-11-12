import React from 'react'
import AuthForm from '../components/AuthForm'
import styled from 'styled-components'
import { CentredContainer } from "../styles/Containers";
import Form from '../components/Form';
import { authForm } from "../data/forms.config";
import { useHistory } from 'react-router';
console.log(authForm)
export default function HomePage() {
   const history = useHistory()


   return (
      <CentredContainer pos="100vh">
         {/* <Form formConfig={authForm} /> */}
         <AuthForm isRegisterForm={history.location.pathname === '/register'} />
      </CentredContainer>
   )
}