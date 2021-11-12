import React from 'react'
import { useRouteMatch, withRouter } from 'react-router'
import NavigateButton from '../components/components-utils/NavigateButton'
import styled from 'styled-components'
import { FormControlS } from '../styles/FormControl'
import { searchIcon } from '../icons'
import { RenderRoutes } from '../App'

function MoviesPage({ childrenRoutes, history }) {
   const { url, path } = useRouteMatch()

   console.log('MOVIES PAGE RENDER')

   const [renderNav, setRenderNav] = React.useState(true)
   // console.log('UsersMangePage PAGE RENDER', url, history.location.pathname)

   React.useEffect(() => {
      let pathName = history.location.pathname

      if (pathName.includes('edit_movie') || pathName.includes('add_movie')) {
         setRenderNav(() => false)
      }
      return () => {
         setRenderNav(() => true)
      }
   }, [history.location.pathname])
   return (

      <div>
         {renderNav &&
            <Navbar>
               <NavbarLeft>
                  <NavigateButton content="All Movies" url={`${url}/all`} />
                  <NavigateButton style={{ marginRight: '3rem' }} content="Add Movie" url={`${url}/add_movie`} />
                  <SearchInput >
                     {searchIcon}  <input type="search" />
                  </SearchInput>
               </NavbarLeft>
               <NavbarRight>
               </NavbarRight>
            </Navbar>
         }

         <RenderRoutes routes={childrenRoutes} />
      </div>
   )
}


export default withRouter(MoviesPage)
const Navbar = styled.div`
   width: 100%;
   display: flex;
`

const NavbarLeft = styled.div`
   display: flex;
   width: 65%;
   > button {
      width: 100px;
      height: 40px;
   }
`

const NavbarRight = styled.div`
   width: 35%;
   display: flex;
   justify-content: flex-end;
`

const SearchInput = styled.div`
   display: flex;
   align-items: center;
   border-bottom: 2px solid black;
   > input {
      border: none;
   }
   > input:focus {
      border: none;
      outline: none;
   }
`
