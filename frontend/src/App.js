import { BrowserRouter, Switch, Route, useRouteMatch, useHistory, Redirect, withRouter } from 'react-router-dom';
import { Suspense } from "react";
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import MoviesPage from './pages/MoviesPage';
import NotFound from './pages/NotFound';
import UsersMangePage from './pages/UsersMangePage';
import history from './hooks/router.history'
import UsersList from './components/UsersList';
import EditUserPage from './pages/EditUserPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import MoviesList from './components/MoviesList';
import EditMovieForm from './components/EditMovieForm';
import EditMoviePage from './pages/EditMoviePage';
import { routesConfig } from './data/routes.config';
import './App.css';


function RouteWithSubRoutes(route) {
   /** Authenticated flag */
   const authenticated = true;
   console.log(route)
   return (
      <Suspense fallback={route.fallback}>

         {/* <Route path={route.path}>
              
         </Route> */}
         <Route
            path={route.path}
            render={(props) =>
               route.redirect ? <Redirect to={route.redirect} exact={route.exact} /> :
                  route.private ? (
                     authenticated ? route.component &&
                        <route.component {...props} childrenRoutes={route.children} /> : <Redirect to='/' />
                  ) : route.component && <route.component {...props} childrenRoutes={route.children} />
            }
         />
      </Suspense>
   );
};




export function RenderRoutes({ routes }) {
   console.log(routes)
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


function App() {
   // console.log('APP COMPONENT: ', history)

   return (
      <div >
         <BrowserRouter>
            {/* <Switch> */}
            <RenderRoutes routes={routesConfig} />
            {/* <Route path="*" component={NotFound} /> */}
            {/* </Switch> */}
         </BrowserRouter>
      </div>
   );
}

export default App;


// <Route path="/" exact={true} component={HomePage} />
// <Route path="/register" exact={true} component={HomePage} />
// <Route path="/main"  >
//    <MainPage />
//    <div style={{ margin: '3rem' }}>
//       <Route path={`${'/main'}/users`}  >
//          <UsersMangePage />
//          <Redirect from={`${'/main'}/users`} to={`${'/main/users'}/all`} exact />
//          <Route path={`${'/main/users'}/all`} render={() => <UsersList />} />
//          <Route path={`${'/main/users'}/edit_user/:id`} exact render={() => <EditUserPage />} />
//          <Route path={`${'/main/users'}/add_user`} exact render={() => <EditUserPage />} />
//       </Route>

//       <Route path={`${'/main'}/movies`}  >
//          <MoviesPage />
//          <Redirect from={`${'/main'}/movies`} to={`${'/main/movies'}/all`} exact />
//          <Route path={`${'/main'}/movies/all`} render={() => <MoviesList />} />
//          <Route path={`${'/main/movies'}/edit_movie/:id`} exact render={() => <EditMoviePage />} />
//          <Route path={`${'/main/movies'}/add_movie`} exact render={() => <EditMoviePage />} />
//       </Route>
//       {/* <Route path={`${'/main'}/movies`} render={() => } /> */}
//       <Route path={`${'/main'}/subscriptions`} render={() => <SubscriptionsPage />} />
//    </div>
// </Route>
