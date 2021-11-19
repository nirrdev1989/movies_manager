import styled from 'styled-components'


export const FormControlS = styled.div`
   width: 100%;
   height: 60px;
   /* margin: auto; */
   display: flex;
   flex-direction: column;
   margin-bottom: 0.5rem;

   > input:focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
   }

   > input {
      border-radius: 0;
   }
   >select {
      border-radius: 0;
   }
`