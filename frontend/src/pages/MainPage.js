import React from 'react'
import { useRouteMatch, withRouter } from 'react-router-dom'
import NavigateButton from '../components/components-utils/NavigateButton'
import styled from 'styled-components'
import { RenderRoutes } from '../App'


function MainPage({ childrenRoutes }) {
   const { url, path } = useRouteMatch()

   // let url = '/main'
   // let path = '/main'
   // console.log(childrenRoutes)


   return (
      <>
         <Container>
            <Navbar>
               <NavbarLeft>
                  <NavigateButton url={`${url}/users/all`} content="Users Mange" />
                  <NavigateButton url={`${url}/movies/all`} content="Movies" />
                  <NavigateButton url={`${url}/subscriptions`} content="Subscriptions" />
               </NavbarLeft>
               <NavbarRight>
                  <NavigateButton style={{ width: '100px' }} url={`/`} content="Logout" />
               </NavbarRight>
            </Navbar>
            <hr />
         </Container>
         <div style={{ margin: '3rem' }} >
            {/* {childrenRoutes.map((route) => {
               return renderRoutes(route)
            })} */}
            <RenderRoutes routes={childrenRoutes} />
         </div>
      </>
   )
}

export default withRouter(MainPage)


const Container = styled.div`
   margin: 3rem;
`

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-space-between;
`

const NavbarLeft = styled.div`
   display: flex;
   width: 65%;
   > button {
      margin-right: 0.5rem;
      background-color: rgb(67, 125, 200);
   }
`

const NavbarRight = styled.div`
   width: 35%;
   display: flex;
   justify-content: flex-end;
`
