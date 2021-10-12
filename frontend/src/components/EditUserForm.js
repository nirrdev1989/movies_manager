import React from 'react'
import { useParams } from 'react-router'
import { premmisions, users } from '../data/data'
import { formatDateForInput } from '../utils/dates'
import NavigateButton from './components-utils/NavigateButton'

export default function EditUserForm({ isEdit }) {
   const [values, setValues] = React.useState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      createdDate: "11/13/2009",
      sessionTimeOut: '',
      premissions: []
   })

   const params = useParams()

   function handleChange(event) {
      let { name, value, checked } = event.target
      console.log(name, value, checked)
      if (name === 'premissions') {
         let presArray = values.premissions

         if (checked) {
            presArray.push(value)
         } else {
            presArray = presArray.filter((p) => p !== value)
         }

         value = presArray
      }

      setValues((prev) => { return { ...prev, [name]: value } })
   }

   function handleSubmit(event) {
      event.preventDefault()

      console.log(values)
   }

   React.useEffect(() => {

      if (isEdit) {
         let currentUser = users.find((user) => user.id === Number(params.id))
         currentUser.createdDate = formatDateForInput(currentUser.createdDate)

         setValues(() => currentUser)
      }
   }, [])

   return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
         <div style={{ width: '300px', height: '400px' }}>
            {isEdit && <h5 style={{ textAlign: 'center' }} >Edit User: {values.firstName + ' ' + values.lastName}</h5>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
               <label>First Name:</label>
               <input type="text" name="firstName" onChange={handleChange} value={values.firstName} />
               <label>Last Name:</label>
               <input type="text" name="lastName" onChange={handleChange} value={values.lastName} />
               <label>User Name:</label>
               <input type="text" name="userName" onChange={handleChange} value={values.userName} />
               <label>Session Time Out:</label>
               <input type="number" name="sessionTimeOut" onChange={handleChange} value={values.sessionTimeOut} />

               {isEdit && <>
                  <label>Created Date:</label>
                  <input type="date" name="createdDate" onChange={handleChange} value={values.createdDate} />
               </>}

               <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                  Premmision:
                  {premmisions.map((premission) => {

                     return (
                        <div  >
                           <input
                              style={{ marginRight: '0.3rem' }}
                              onChange={handleChange}
                              name="premissions"
                              key={premission}
                              value={premission}
                              type='checkbox'
                              checked={values.premissions.find((p) => p === premission)}
                           />
                           <label>{premission}</label>
                        </div>
                     )
                  })}
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }} >
                  <button style={{ marginTop: '1rem', marginBottom: '1rem' }} type="submit">Svae</button>
                  <NavigateButton styles={{ marginTop: '1rem', marginBottom: '1rem' }} content="Cancel" url="/main/users/all" />
               </div>
            </form>
         </div>
      </div>
   )
}
