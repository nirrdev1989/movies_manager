import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { FormControlS } from '../styles/FormControl'
import { FromWrapperS } from '../styles/FormWrapper'
import Button from './components-utils/Button'

export default function AuthForm({ isRegisterForm, history }) {
   console.log('IS REGISTER FORM: ', isRegisterForm)

   const { state, onChange, onSubmit } = useForm({
      userName: '',
      password: ''
   }, callback)

   function callback(values) {
      console.log(values)
   }

   return (
      <FromWrapperS>
         <h4 style={{ marginBottom: '1rem' }}>{isRegisterForm ? "Register" : 'Login'}</h4>
         <form onSubmit={onSubmit} style={{ width: '300px', height: '200px' }}>
            <FormControlS className="form_control">
               <label>User Name</label>
               <input type="text" name="userName" onChange={onChange} value={state.userName} />
            </FormControlS>
            <FormControlS className="form_control">
               <label>Password</label>
               <input type="password" name="password" onChange={onChange} value={state.password} />
            </FormControlS>
            <div style={{ marginTop: '1rem' }}>
               <Button type="submit" bg="rgb(34, 238, 170)" content={isRegisterForm ? 'Register' : 'Login'} />
            </div>
         </form>
         {isRegisterForm ? <Link to="/" >Login</Link> : <Link to="/register" >Create Account</Link>}
      </FromWrapperS>
   )
}
