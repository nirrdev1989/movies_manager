import React from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import styled from 'styled-components'
import NavigateButton from '../components/components-utils/NavigateButton'
import { RenderRoutes } from '../router/Routes'


export default function SubscriptionsPage({ childrenRoutes, currentUser }) {
   const { url } = useRouteMatch()
   const history = useHistory()

   const [renderNav, setRenderNav] = React.useState(true)

   React.useEffect(() => {
      let pathName = history.location.pathname

      if (pathName.includes('edit_member') || pathName.includes('add_member')) {
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
               <NavigateButton content="All Members" url={`${url}/all`} />
               {currentUser.premissions.includes('add members') && <NavigateButton content="Add Member" url={`${url}/add_member`} />}
            </Navbar>
         }
         <RenderRoutes routes={childrenRoutes} />
      </div>
   )
}


const Navbar = styled.div`
   width: 100%;
   display: flex;
   > button {
      width: 120px;
      height: 40px;
      /* background-color: transparent; */
   }
`