import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { routesConfig } from './data/routes.config';
import { connect } from 'react-redux';
import { authUserLoginStart } from './redux/auth/actions';
import { ToastContainer } from 'react-toastify';
import { RenderRoutes } from './router/Routes';
import Navbar from './components/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App({ authUserLogin }) {
   useEffect(() => {
      authUserLogin()
   }, [])

   return (
      <div className="app_container">
         <ToastContainer />
         <Navbar />
         <div >
            <BrowserRouter>
               <RenderRoutes routes={routesConfig} />
            </BrowserRouter>
         </div>
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      authUserLogin: () => dispatch(authUserLoginStart())
   }
}

export default connect(null, mapDispatchToProps)(App);


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
//       <Route path={`${'/main'}/movies`}>
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
