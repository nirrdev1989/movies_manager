import styled from "styled-components"


export const SubsListContainer = styled.div` 
    margin-top: 0.5rem;
    width: 90%;
    max-height: ${(props) => props.maxHeight};
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 7px;
   }
   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }
   ::-webkit-scrollbar-thumb {
      background: #888;
   }
   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
`