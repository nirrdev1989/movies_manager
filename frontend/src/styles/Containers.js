import styled from 'styled-components'

export const CentredContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: ${(props) => props.pos};
`