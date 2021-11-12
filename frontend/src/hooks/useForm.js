import { useState } from "react";


export default function useForm(initialState, callback) {
   const [state, setState] = useState(initialState)

   function onSubmit(event) {
      event.preventDefault()

      // console.log(state)
      callback(state)
   }

   function onChange(event) {
      const { name, value } = event.target

      setState((prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }

   return { onSubmit, onChange, setState, state }
}