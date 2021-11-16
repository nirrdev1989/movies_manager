import styled from 'styled-components'


export const ButtonS = styled.button`
   padding: 0.5rem;
   width: 100%;
   color: ${(props) => props.color || 'balck'};
   background-color: ${(props) => props.bg || 'wihte'};
   opacity: 1;
   transition: all 0.4s ease;
   font-weight: 600;
   border: none;
   &:hover {
      opacity: 0.7;
   }
   &:disabled {
      background-color: lightgray;
      cursor: not-allowed;
   }
`