import NavigateButton from '../components/components-utils/NavigateButton'
import styled from 'styled-components'
import { searchIcon } from '../icons'
import { RenderRoutes } from '../router/Routes'
import { useRenderContent } from '../hooks/renderContent'

function MoviesPage({ childrenRoutes, currentUser, history, match }) {
   const pathname = history.location.pathname

   const [render] = useRenderContent(pathname.includes('edit_movie') || pathname.includes('add_movie'), pathname)

   function onSerach(key, value) {
      if (key === 13) {
         history.push(`/main/movies/all/search?${value}`)
      }
   }

   return (
      <div>
         {render &&
            <Navbar>
               <NavbarLeft>
                  <NavigateButton content="All Movies" url={`${match.url}/all`} />
                  {currentUser.premissions.includes('add movies') && <NavigateButton style={{ marginRight: '3rem' }} content="Add Movie" url={`${match.url}/add_movie`} />}
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
      /* background-color: transparent; */
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
