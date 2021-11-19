import styled from 'styled-components'


export const ButtonS = styled.button`
   padding: 0.5rem;
   width: 100%;
   font-weight: 600;
   color: ${(props) => props.color || 'balck'};
   background-color: ${(props) => props.bg || 'wihte'};
   opacity: 1;
   transition: all 0.4s ease;
   font-weight: 600;
   border: none;
   &:hover {
      opacity: 0.6;
   }
   &:disabled {
      /* background-color: transparent; */
      background-color: lightgray;
      /* color: rgb(67, 125, 200); */
      color: #e66465;
      cursor: not-allowed;
      &:hover{
         opacity: 1;
      }
   }
`