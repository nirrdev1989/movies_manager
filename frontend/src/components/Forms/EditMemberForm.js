import useForm from '../../hooks/useForm'
import { FromWrapperS } from '../../styles/FormWrapper'
import { FormControlS } from '../../styles/FormControl'
import Button from '../components-utils/Button'
import NavigateButton from '../components-utils/NavigateButton'
import { CentredContainer } from '../../styles/Containers'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { addMemberAction, updateMemberAction } from '../../redux/members/actions'
import { useEffect } from 'react'
// pattern={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}

function EditMemberForm({ isEdit, members, addMember, updateMember }) {
   const params = useParams()

   const { state, onChange, onSubmit, setState } = useForm({
      memberName: '',
      email: '',
      city: ''
   }, callback)

   function callback(values) {
      if (isEdit) {
         // console.log(Number(params.id))
         debugger
         updateMember(values._id, values, Number(params.id))
      } else {
         addMember(values)
      }
   }

   useEffect(() => {
      if (isEdit) {
         setState(() => members[Number(params.id)])
      }
   }, [])

   return (
      <CentredContainer>
         <FromWrapperS>
            <h4 style={{ marginBottom: '1rem' }}>{isEdit ? "Edit" : 'Add'}</h4>
            <form onSubmit={onSubmit} style={{ width: '300px', height: '270px' }}>
               <FormControlS className="form_control">
                  <label>Member Name</label>
                  <input
                     type="text"
                     name="memberName"
                     onChange={onChange}
                     value={state.memberName}
                     required={true}
                     minLength={3}
                     maxLength={80}
                  />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>Email</label>
                  <input
                     type="email"
                     name="email"
                     onChange={onChange}
                     value={state.email}
                     required={true}
                  />
               </FormControlS>
               <FormControlS className="form_control">
                  <label>City</label>
                  <input
                     type="text"
                     name="city"
                     onChange={onChange}
                     value={state.city}
                     required={true}
                     maxLength={50}
                  />
               </FormControlS>
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
                     url="/main/subscriptions/all"
                  />
               </div>
            </form>
         </FromWrapperS>
      </CentredContainer>
   )
}


function mapStateToProps(state) {
   return {
      loading: state.members.loading,
      error: state.members.error,
      members: state.members.members
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addMember: (data) => dispatch(addMemberAction(data)),
      updateMember: (id, data, index) => dispatch(updateMemberAction(id, data, index))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMemberForm)