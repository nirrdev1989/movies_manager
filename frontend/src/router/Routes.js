import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

function RouteWithSubRoutes(route) {

   const { isAuth, currentUser } = useSelector((state) => state.auth)
   console.log(currentUser)

   return (
      <Suspense fallback={route.fallback}>
         <Route
            path={route.path}
            render={(props) => {
               console.log('ROUTE IS PRIVETE:', route.private, 'IS AUTH: ', isAuth)
               if (route.redirect && !route.private) {
                  return <Redirect to={route.redirect} exact={route.exact} />
               }
               else if (route.private && isAuth) {

                  console.log('PRIVTE ROUTE')
                  return <route.component {...props} childrenRoutes={route.children} />
               }
               else if (route.private && !isAuth) {
                  return <Redirect to='/' />
               }
               else {
                  return <route.component {...props} childrenRoutes={route.children} />
               }
            }}
         />
      </Suspense>
   );
};




export function RenderRoutes({ routes }) {
   return (
      <Switch>
         {routes.map((route) => {
            return (
               <RouteWithSubRoutes key={route.key} {...route} />
            )
         })}
      </Switch>
   )
}
