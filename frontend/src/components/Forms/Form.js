import React from 'react'
import { FormControlS } from '../../styles/FormControl'
import { FromWrapperS } from '../../styles/FormWrapper'
import Button from '../components-utils/Button'
// import { authForm, validators } from "./forms.config";
// import { useForm } from 'react-hook-form';
// import Input from './components/Input';
// import Select from './components/Select';
// import Checkbox from './components/Checkbox';



export default function Form({ formConfig }) {

   const [values, setValues] = React.useState(null)
   const [errors, setErrors] = React.useState(null)

   function handleChange(event) {
      let { name, value, checked, type } = event.target
      console.log('HANDLE CHANGE', name, value)

      if (type === 'checkbox') {
         value = checked
      }

      setValues((prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }


   function handleSubmit(event) {
      event.preventDefault()
      console.log(values)
   }

   React.useEffect(() => {
      let formValues = {}
      let formErrors = {}

      formConfig.inputs.forEach((input) => {
         formValues[input['name']] = input.value
         formErrors[input['name']] = ''
      })

      setValues(formValues)
   }, [])

   React.useEffect(() => {
      // console.log('VALUS')
   }, [values])

   function handleForm(inputs) {
      return inputs.map((input) => {
         let { type, name, value, label, options, validators } = input
         // console.log(validators[0](values[name], 2))

         switch (type) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'date':
               return (
                  <FormControlS key={label}>
                     <label>{label}</label>
                     <input defaultValue={value} type={type} name={name} {...validators} onChange={handleChange} />
                  </FormControlS>
               )
            case 'select':
               return (
                  <FormControlS key={label}>
                     <label>{label}</label>
                     <select defaultValue={options[0].value} onChange={handleChange} name={name}>
                        {options.map((option) => {
                           return <option key={option.value} value={option.value}>{option.content}</option>
                        })}
                     </select>
                  </FormControlS>
               )
            case 'checkbox':
               return (
                  <FormControlS key={label}>
                     <label>{label}</label>
                     <input type="checkbox" defaultChecked={value} name={name} onChange={handleChange} />
                  </FormControlS>
               )
            default:
               return null
         }
      })
   }

   return (
      <div className="App">
         <FromWrapperS>
            <form style={{ width: formConfig.width, height: formConfig.height }} onSubmit={handleSubmit}>
               {handleForm(formConfig.inputs)}
               {/* <button type="submit" >submit</button> */}
               <div style={{ marginTop: '1rem' }}>
                  <Button type="submit" bg="rgb(34, 238, 170)" content={0 ? 'Register' : 'Login'} />
               </div>
            </form>
         </FromWrapperS>
      </div>
   );
}
