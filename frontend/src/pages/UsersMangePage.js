import React from 'react'
import NavigateButton from '../components/components-utils/NavigateButton'
import { Link, Switch, Route, useRouteMatch, withRouter, Redirect } from 'react-router-dom'
import UsersList from '../components/UsersList'
import EditUserPage from './EditUserPage'
// import history from '../hooks/router.history'

function UsersMangePage({ history }) {
   // console.log(history)
   const { url, path } = useRouteMatch()
   const [renderNav, setRenderNav] = React.useState(true)
   console.log('UsersMangePage PAGE RENDER', url, history.location.pathname)

   React.useEffect(() => {
      let pathName = history.location.pathname

      if (pathName.includes('edit_user')) {
         setRenderNav(() => false)
      }
      return () => {
         setRenderNav(() => true)
      }
   }, [history.location.pathname])

   return (
      <div>
         UsersMangePage
         {renderNav &&
            <div style={{ marginTop: '1rem' }} >
               <NavigateButton content="All Users" url={`${url}/all`} />
               <NavigateButton content="Add User" url={`${url}/add_user`} />
            </div>
         }
      </div>
   )
}


export default withRouter(UsersMangePage)