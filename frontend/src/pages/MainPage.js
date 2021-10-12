import React from 'react'
import { useRouteMatch, withRouter } from 'react-router-dom'
import NavigateButton from '../components/components-utils/NavigateButton'


function MainPage() {
   const { url, path } = useRouteMatch()

   // let url = '/main'
   // let path = '/main'
   console.log(path, url)


   return (
      <div style={{ margin: '2rem' }}>
         <h2>Main Page</h2>
         <div>
            <NavigateButton url={`${url}/users/all`} content="Users Mange" />
            <NavigateButton url={`${url}/movies/all`} content="Movies" />
            <NavigateButton url={`${url}/subscriptions`} content="Subscriptions" />
            <NavigateButton url={`/`} content="Logout" />
         </div>
      </div>
   )
}

export default withRouter(MainPage)
