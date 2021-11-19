import NavigateButton from '../components/components-utils/NavigateButton'
import styled from 'styled-components'
import { RenderRoutes } from '../router/Routes'
import Button from '../components/components-utils/Button'
import { connect } from 'react-redux'
import { logoutActionStart } from '../redux/auth/actions'


function MainPage({ childrenRoutes, logout, currentUser, history, match }) {

   return (
      <>
         <NavContainer>
            <Navbar>
               <NavbarLeft>
                  {currentUser.premissions.includes('view users') && <NavigateButton url={`${match.url}/users/all`} content="Users Mange" />}
                  {currentUser.premissions.includes('view movies') && <NavigateButton url={`${match.url}/movies/all`} content="Movies" />}
                  {currentUser.premissions.includes('view members') && <NavigateButton url={`${match.url}/subscriptions/all`} content="Subscriptions" />}
               </NavbarLeft>
               <NavbarRight>
                  <UserLoged>{currentUser.firstName + ' ' + currentUser.lastName}</UserLoged>
                  <Button style={{ width: '100px' }} handler={() => logout()} bg={"whitesmoke"} content="Logout" />
               </NavbarRight>
            </Navbar>
            <hr />
         </NavContainer>

         <MainContainer >
            {history.location.pathname === '/main' &&
               <MainImgContainer style={{ width: '100%' }}>
                  <div style={{ width: '90%', margin: 'auto' }}>
                     <img width="100%" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg?crop=0.470xw:1.00xh;0.353xw,0&resize=640:*" />
                  </div>
               </MainImgContainer>
            }
            <RenderRoutes routes={childrenRoutes} />
         </MainContainer>
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
  align-items: center;
`

const NavbarLeft = styled.div`
   display: flex;
   width: 65%;
   > button {
      margin-right: 0.5rem;
      background-color: transparent;
      max-width: 150px;
      /* color: rgb(67, 125, 200); */
      /* background-color: rgb(67, 125, 200); */
   }
`

const NavbarRight = styled.div`
   width: 35%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`

const UserLoged = styled.div`
   margin-right: 2rem;
   font-weight: 600;
   font-size: 19px;
 `

const MainContainer = styled.div`
   margin:3rem; ;
`

const MainImgContainer = styled.div`
   width: 100%
`

