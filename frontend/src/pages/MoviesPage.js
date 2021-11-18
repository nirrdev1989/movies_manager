import React from 'react'
import { useHistory, useRouteMatch, withRouter } from 'react-router'
import NavigateButton from '../components/components-utils/NavigateButton'
import styled from 'styled-components'
import { searchIcon } from '../icons'
import { RenderRoutes } from '../router/Routes'

function MoviesPage({ childrenRoutes, currentUser }) {

   const { url } = useRouteMatch()
   const history = useHistory()

   const [renderNav, setRenderNav] = React.useState(true)

   function onSerach(key, value) {
      if (key === 13) {
         history.push(`/main/movies/all/search?${value}`)
      }
   }

   React.useEffect(() => {
      let pathName = history.location.pathname

      if (pathName.includes('edit_movie') || pathName.includes('add_movie')) {
         setRenderNav(() => false)
      }
      return () => {
         setRenderNav(() => true)
      }
   }, [history.location.pathname])

   console.log(currentUser)

   return (

      <div>
         {renderNav &&
            <Navbar>
               <NavbarLeft>
                  <NavigateButton content="All Movies" url={`${url}/all`} />
                  {currentUser.premissions.includes('add movies') && <NavigateButton style={{ marginRight: '3rem' }} content="Add Movie" url={`${url}/add_movie`} />}
                  <SearchInput>
                     {searchIcon}  <input type="search" onKeyDown={(e) => onSerach(e.keyCode, e.target.value)} />
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


export default MoviesPage

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
   background-color: none;
   > input {
      border: none;
   }
   > input:focus {
      border: none;
      outline: none;
   }
`
