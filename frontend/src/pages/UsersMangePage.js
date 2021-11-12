import React from 'react'
import NavigateButton from '../components/components-utils/NavigateButton'
import { Link, Switch, Route, useRouteMatch, withRouter, Redirect } from 'react-router-dom'
import UsersList from '../components/UsersList'
import EditUserPage from './EditUserPage'
import styled from 'styled-components'
import { RenderRoutes } from '../App'
// import history from '../hooks/router.history'

function UsersMangePage({ childrenRoutes, history }) {
   // console.log(history)
   const { url, path } = useRouteMatch()
   const [renderNav, setRenderNav] = React.useState(true)

   console.log(childrenRoutes)
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

         {/* {childrenRoutes.map((route) => {
            return renderRoutes(route)
         })} */}
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