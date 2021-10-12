import { BrowserRouter, Switch, Route, useRouteMatch, useHistory, Redirect } from 'react-router-dom';
import './App.css';
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
function App() {
   console.log('APP COMPONENT: ', history)

   return (
      <div >
         <BrowserRouter>
            <Switch>
               <Route path="/" exact={true} component={HomePage} />
               <Route path="/register" exact={true} component={HomePage} />
               <Route path="/main"  >
                  <MainPage />
                  <div className="container">
                     <Route path={`${'/main'}/users`}  >
                        <UsersMangePage />
                        <Redirect from={`${'/main'}/users`} to={`${'/main/users'}/all`} exact />
                        <Route path={`${'/main/users'}/all`} render={() => <UsersList />} />
                        <Route path={`${'/main/users'}/edit_user/:id`} exact render={() => <EditUserPage />} />
                        <Route path={`${'/main/users'}/add_user`} exact render={() => <EditUserPage />} />
                     </Route>

                     <Route path={`${'/main'}/movies`}  >
                        <MoviesPage />
                        <Redirect from={`${'/main'}/movies`} to={`${'/main/movies'}/all`} exact />
                        <Route path={`${'/main'}/movies/all`} render={() => <MoviesList />} />
                     </Route>
                     {/* <Route path={`${'/main'}/movies`} render={() => } /> */}
                     <Route path={`${'/main'}/subscriptions`} render={() => <SubscriptionsPage />} />
                  </div>
               </Route>
               <Route path="*" component={NotFound} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
