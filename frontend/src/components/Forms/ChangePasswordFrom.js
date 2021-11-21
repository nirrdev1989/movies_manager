import React from 'react'
import { connect } from 'react-redux'
import useForm from '../../hooks/useForm'
import { changePasswordAction } from '../../redux/users/actions'
import { CentredContainer } from '../../styles/Containers'
import { FormControlS } from '../../styles/FormControl'
import { FromWrapperS } from '../../styles/FormWrapper'
import Button from '../components-utils/Button'

function ChangePasswordFrom({ changePassword }) {
   const { state, onChange, onSubmit } = useForm({
      newPassword: '',
      oldPassword: ''
   }, callback)

   function callback(values) {
      console.log(values)

      changePassword(values)
   }

   return (
      <CentredContainer>
         <FromWrapperS>
            <h4 style={{ marginBottom: '1rem' }}>Change Password</h4>
            <form onSubmit={onSubmit} style={{ width: '300px', height: '200px' }}>
               <FormControlS className="form_control">
                  <label>Old Password</label>
                  <input
                     type="password"
                     name="oldPassword"
                     onChange={onChange}
                     value={state.oldPassword}
                     required={true}
                     minLength={3}
                     maxLength={20}
                  />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>New Paswword</label>
                  <input
                     type="password"
                     name="newPassword"
                     onChange={onChange}
                     value={state.newPassword}
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
                     // disabled={globalLoader}
                     content="Change"
                  />
               </div>
            </form>
         </FromWrapperS>
      </CentredContainer>
   )
}

function mapDispatchToProps(dispatch) {
   return {
      changePassword: (data) => dispatch(changePasswordAction(data))
   }
}

export default connect(null, mapDispatchToProps)(ChangePasswordFrom)