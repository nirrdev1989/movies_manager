import styled from 'styled-components'


export const CardWrapper = styled.div`
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: Arial, Helvetica, sans-serif;
   padding: 1rem;
   /* margin: 1rem; */
   background: linear-gradient(360deg, #fafafa, #fff, #fff);
`

export const Card = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const CardHeader = styled.div`
  width: 100%;
  height: 20%;
`

export const CardBody = styled.div`
  width: 100%;
  height: 60%;
  /* align-items: center; */
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`

export const CardFooter = styled.div`
  width: 100%;
  /* height: 20%; */
  display: flex;
  justify-content: space-around;
  margin: auto;
  /* align-items: center;
  flex-direction: column;
  min-height: 100vh; */
  /* bottom: 0; */
 /* display: flex; */
 /* justify-content: end; */
`