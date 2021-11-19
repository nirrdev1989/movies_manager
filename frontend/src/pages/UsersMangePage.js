import React from 'react'
import NavigateButton from '../components/components-utils/NavigateButton'
import styled from 'styled-components'
import { RenderRoutes } from '../router/Routes'
import { useRenderContent } from '../hooks/renderContent'


function UsersMangePage({ childrenRoutes, history, match }) {
   const pathname = history.location.pathname
   const [render] = useRenderContent(pathname.includes('edit_user') || pathname.includes('add_user'), pathname)

   return (
      <div>
         {render &&
            <Navbar >
               <NavigateButton content="All Users" url={`${match.url}/all`} />
               <NavigateButton content="Add User" url={`${match.url}/add_user`} />
            </Navbar>
         }
         <RenderRoutes routes={childrenRoutes} />
      </div>
   )
}


export default UsersMangePage

const Navbar = styled.div`
   width: 100%;
   display: flex;
   > button {
      width: 100px;
      /* background-color: transparent; */
   }
`