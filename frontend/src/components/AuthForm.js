import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthForm({ isRegisterForm }) {
   console.log('IS REGISTER FORM: ', isRegisterForm)

   const [values, setValues] = React.useState({
      userName: '',
      password: ''
   })

   function handleChange(event) {
      const { name, value } = event.target
      setValues((prev) => { return { ...prev, [name]: value } })
   }

   function handleSubmit(event) {
      event.preventDefault()

      console.log(values)
   }

   return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
         <div style={{ width: '300px', height: '400px' }}>
            <h3 style={{ textAlign: 'center' }} >{isRegisterForm ? "Register" : 'Login'}</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
               <label>User Name</label>
               <input type="text" name="userName" onChange={handleChange} value={values.userName} />
               <label>Password</label>
               <input type="password" name="password" onChange={handleChange} value={values.password} />
               <button style={{ marginTop: '1rem', marginBottom: '1rem' }} type="submit">{isRegisterForm ? 'Register' : 'Login'}</button>
            </form>

            {isRegisterForm ? <Link to="/" >Login</Link> : <Link to="/register" >Create Account</Link>}
         </div>
      </div>
   )
}
