import React from 'react'
import NavigateButton from '../components/components-utils/NavigateButton'
import { useRouteMatch, withRouter, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { RenderRoutes } from '../router/Routes'


function UsersMangePage({ childrenRoutes }) {
   const { url } = useRouteMatch()
   const history = useHistory()

   const [renderNav, setRenderNav] = React.useState(true)

   React.useEffect(() => {
      let pathName = history.location.pathname

      if (pathName.includes('edit_user') || pathName.includes('add_user')) {
         setRenderNav(() => false)
      }
      return () => {
         setRenderNav(() => true)
      }
   }, [history.location.pathname])

   return (
      <div>
         {renderNav &&
            <Navbar >
               <NavigateButton content="All Users" url={`${url}/all`} />
               <NavigateButton content="Add User" url={`${url}/add_user`} />
            </Navbar>
         }
         <RenderRoutes routes={childrenRoutes} />
      </div>
   )
}


export default withRouter(UsersMangePage)

const Navbar = styled.div`
   width: 100%;
   display: flex;
   > button {
      width: 100px;
   }
`