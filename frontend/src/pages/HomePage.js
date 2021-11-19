import React from 'react'
import AuthForm from '../components/Forms/AuthForm'
import { CentredContainer } from "../styles/Containers";
import { useHistory } from 'react-router';
// import Form from '../components/Form';
// import { authForm } from "../data/forms.config";


export default function HomePage({ history }) {
   // const history = useHistory()
   // console.log(history)
   return (
      <CentredContainer pos="80vh">
         {/* <Form formConfig={authForm} /> */}
         <AuthForm isRegisterForm={history.location.pathname === '/register'} />
      </CentredContainer>
   )
}