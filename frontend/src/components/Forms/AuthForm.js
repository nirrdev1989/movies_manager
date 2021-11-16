import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { loginActionStart, registerActionStart } from '../../redux/auth/actions'
import { FormControlS } from '../../styles/FormControl'
import { FromWrapperS } from '../../styles/FormWrapper'
import Button from '../components-utils/Button'


function AuthForm({ isRegisterForm, login, globalLoader, isAuth, register }) {
   const { state, onChange, onSubmit } = useForm({
      userName: '',
      password: ''
   }, callback)

   function callback(values) {
      console.log(values)
      if (isRegisterForm) {
         register(values)
      } else {
         login(values)
      }

   }
   console.log('GLOBAL LOADER: ', globalLoader)
   if (isAuth) {
      return <Redirect to="/main" />
   }

   return (
      <FromWrapperS>
         <h4 style={{ marginBottom: '1rem' }}>{isRegisterForm ? "Register" : 'Login'}</h4>
         <form onSubmit={onSubmit} style={{ width: '300px', height: '200px' }}>
            <FormControlS className="form_control">
               <label>User Name</label>
               <input
                  type="text"
                  name="userName"
                  onChange={onChange}
                  value={state.userName}
                  required={true}
                  minLength={1}
                  maxLength={50}
               />
            </FormControlS>
            <FormControlS className="form_control">
               <label>Password</label>
               <input
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={state.password}
                  required={true}
                  minLength={3}
                  maxLength={20}
               />
            </FormControlS>
            <div style={{ marginTop: '1rem' }}>
               <Button
                  type="submit"
                  bg="#9198e5"
                  color="white"
                  disabled={globalLoader}
                  content={isRegisterForm ? 'Register' : 'Login'}
               />
            </div>
         </form>
         {isRegisterForm ? <Link to="/" >Login</Link> : <Link to="/register" >Create Account</Link>}
      </FromWrapperS>
   )
}

function mapStateToProps(state) {
   return {
      globalLoader: state.globalLoader.status,
      currentUser: state.auth.currentUser,
      isAuth: state.auth.isAuth
   }
}

function mapDispatchToProps(dispatch) {
   return {
      login: (data) => dispatch(loginActionStart(data)),
      register: (data) => dispatch(registerActionStart(data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)