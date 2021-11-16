import { useParams } from 'react-router'
import { premissions } from '../../data/data'
import useForm from '../../hooks/useForm'
import { formatDateForInput } from '../../utils/dates'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'
import { FormControlS } from '../../styles/FormControl'
import { FromWrapperS } from '../../styles/FormWrapper'
import { CentredContainer } from "../../styles/Containers";
import { connect } from 'react-redux'
import { addUserAction, updateUserAction } from '../../redux/users/actions'
import { useEffect } from 'react'


function EditUserForm({ isEdit, addUser, loading, error, users, updateUser }) {
   const params = useParams()

   const { state, setState, onSubmit, onChange } = useForm({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      createdDate: "11/13/2009",
      sessionTimeOut: '',
      premissions: []
   }, callback)

   function callback(values) {
      console.log(values)
      if (isEdit) {
         updateUser(params.id, values)
      } else {
         addUser(values)
      }
   }

   function handleChangePremissions(event) {
      let { name, value, checked } = event.target

      let presArray = state.premissions

      if (checked) {
         presArray.push(value)
      } else {
         presArray = presArray.filter((p) => p !== value)
      }

      value = presArray

      setState((prev) => { return { ...prev, [name]: value } })
   }

   useEffect(() => {
      if (isEdit) {
         let currentUser = users.find((user) => user._id === params.id)
         currentUser.createdDate = formatDateForInput(currentUser.createdDate)
         setState(() => currentUser)
      }
   }, [])

   return (
      <CentredContainer>
         <FromWrapperS >
            <h4 style={{ marginBottom: '1rem' }} > {isEdit ? 'Edit user: ' + state.firstName + ' ' + state.lastName : 'Add user'} </h4>
            <form onSubmit={onSubmit} style={{ width: '500px', height: '400px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1rem' }}>
                  <div>
                     <FormControlS>
                        <label>First Name:</label>
                        <input
                           type="text"
                           name="firstName"
                           onChange={onChange}
                           value={state.firstName}
                           required={true}
                           maxLength={30}
                        />
                     </FormControlS>
                     <FormControlS>
                        <label>Last Name:</label>
                        <input
                           type="text"
                           name="lastName"
                           onChange={onChange}
                           value={state.lastName}
                           required={true}
                           maxLength={30}
                        />
                     </FormControlS>
                     <FormControlS>
                        <label>User Name:</label>
                        <input
                           type="text"
                           name="userName"
                           onChange={onChange}
                           value={state.userName}
                           required={true}
                           maxLength={30}
                        />
                     </FormControlS>
                     <FormControlS>
                        <label>Session Time Out:</label>
                        <input
                           type="number"
                           name="sessionTimeOut"
                           onChange={onChange}
                           value={state.sessionTimeOut}
                           required={true}
                        />
                     </FormControlS>

                     {isEdit && <>
                        <FormControlS>
                           <label>Created Date:</label>
                           <input
                              type="date"
                              name="createdDate"
                              onChange={onChange}
                              value={state.createdDate}
                              required={true}
                           />
                        </FormControlS>
                     </>}
                  </div>
                  <div>
                     Premissions:
                     {premissions.map((premission) => {
                        return (
                           <div  >
                              <input
                                 style={{ marginRight: '0.3rem' }}
                                 onChange={handleChangePremissions}
                                 name="premissions"
                                 key={premission}
                                 value={premission}
                                 type='checkbox'
                                 checked={state.premissions.find((p) => p === premission)}
                              />
                              <label>{premission}</label>
                           </div>
                        )
                     })}
                  </div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'center' }} >
                  <Button
                     style={{ marginTop: '1rem', marginBottom: '1rem' }}
                     color="green"
                     content="Save"
                     type="submit"
                  />
                  <NavigateButton
                     style={{ marginTop: '1rem', marginBottom: '1rem', color: 'red' }}
                     color="rgb(248, 74, 74)"
                     content="Cancel"
                     url="/main/users/all"
                  />
               </div>
            </form>
         </FromWrapperS>
      </CentredContainer>
   )
}

function mapStateToProps(state) {
   return {
      loading: state.users.loading,
      error: state.users.error,
      users: state.users.users
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addUser: (data) => dispatch(addUserAction(data)),
      updateUser: (id, data) => dispatch(updateUserAction(id, data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm)