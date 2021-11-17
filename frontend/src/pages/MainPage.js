
import { useRouteMatch } from 'react-router-dom'
import NavigateButton from '../components/components-utils/NavigateButton'
import styled from 'styled-components'
import { RenderRoutes } from '../router/Routes'
import Button from '../components/components-utils/Button'
import { connect } from 'react-redux'
import { logoutActionStart } from '../redux/auth/actions'


function MainPage({ childrenRoutes, logout }) {
   const { url } = useRouteMatch()

   return (
      <>
         <NavContainer>
            <Navbar>
               <NavbarLeft>
                  <NavigateButton url={`${url}/users/all`} content="Users Mange" />
                  <NavigateButton url={`${url}/movies/all`} content="Movies" />
                  <NavigateButton url={`${url}/subscriptions/all`} content="Subscriptions" />
               </NavbarLeft>
               <NavbarRight>
                  <Button style={{ width: '100px' }} handler={() => logout()} bg={"whitesmoke"} content="Logout" />
               </NavbarRight>
            </Navbar>
            <hr />
         </NavContainer>

         <div style={{ margin: '3rem' }} >
            <RenderRoutes routes={childrenRoutes} />
         </div>
      </>
   )
}

function mapDispatchToProps(dispatch) {
   return {
      logout: () => dispatch(logoutActionStart())
   }
}

export default connect(null, mapDispatchToProps)(MainPage)


const NavContainer = styled.div`
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
