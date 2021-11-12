const authForm = {
   titile: 'Login',
   width: '400px',
   height: '200px',
   path: '/',
   inputs: [
      {
         type: 'text',
         name: 'userName',
         label: 'User name',
         value: '',
         validators: {
            minLength: 3,
            maxLength: 15,
            required: true
         }
      },
      {
         type: 'password',
         name: 'password',
         label: 'Password',
         value: '',
         validators: {
            minLength: 3,
            required: true,
            maxLength: 15,
         }
      },
   ]
}

export {
   authForm
}