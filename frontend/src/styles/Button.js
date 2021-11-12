import styled from 'styled-components'


export const ButtonS = styled.button`
   padding: 0.5rem;
   width: 100%;
   color: ${(props) => props.color || 'balck'};
   background-color: ${(props) => props.bg || 'wihte'};
   opacity: 0.8;
   transition: all 0.4s ease;
   font-weight: 600;
   border: none;
   /* margin: 0.5rem; */
   &:hover {
      opacity: 1;
   }
   &:disabled {
      background-color: lightgray;
      cursor: not-allowed;
   }
`