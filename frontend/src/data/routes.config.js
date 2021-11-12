import MoviesList from "../components/MoviesList";
import UsersList from "../components/UsersList";
import EditMoviePage from "../pages/EditMoviePage";
import EditUserPage from "../pages/EditUserPage";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import MoviesPage from "../pages/MoviesPage";
import NotFound from "../pages/NotFound";
import UsersMangePage from "../pages/UsersMangePage";

// component: lazy(() => import('../pages/HomePage')),


export const routesConfig = [
   {
      key: '/',
      path: '/',
      exact: true,
      redirect: '/home',
      fallback: <div> Loading... </div>
   },
   {
      key: 'HOME',
      path: '/home',
      component: HomePage,
      exact: true,
      private: false,
      fallback: <div> Loading... </div>,
      children: []
   },
   {
      key: 'HOME_REGISTER',
      path: '/register',
      component: HomePage,
      exact: true,
      private: false,
      fallback: <div> Loading... </div>,
      children: []
   },
   {
      key: 'MAIN',
      path: '/main',
      component: MainPage,
      private: false,
      exact: false,
      fallback: <div> Loading... </div>,
      children: [
         {
            key: 'MAIN_USERS',
            path: '/main/users',
            // redirect: '/main/users/all',
            component: UsersMangePage,
            private: true,
            exact: false,
            fallback: <div> Loading... </div>,
            children: [
               {
                  key: 'MAIN_USERS_ALL',
                  path: '/main/users/all',
                  component: UsersList,
                  private: true,
                  exact: false,
                  fallback: <div> Loading... </div>,
               },
               {
                  key: 'MAIN_USERS_EDIT_USER',
                  path: '/main/users/edit_user/:id',
                  component: EditUserPage,
                  private: true,
                  exact: true,
                  fallback: <div> Loading... </div>,
               },
               {
                  key: 'MAIN_USERS_ADD_USER',
                  path: '/main/users/add_user',
                  component: EditUserPage,
                  private: true,
                  exact: true,
                  fallback: <div> Loading... </div>,
               }
            ]
         },
         {
            key: 'MAIN_MOVIES',
            path: '/main/movies',
            // redirect: '/main/users/all',
            component: MoviesPage,
            private: true,
            exact: false,
            fallback: <div> Loading... </div>,
            children: [
               {
                  // /main'}/movies/all
                  key: 'MAIN_MOVIES_ALL',
                  path: '/main/movies/all',
                  component: MoviesList,
                  private: true,
                  exact: false,
                  fallback: <div> Loading... </div>,
               },
               {
                  key: 'MAIN_USERS_EDIT_MOVIE',
                  path: '/main/movies/edit_movie/:id',
                  component: EditMoviePage,
                  private: true,
                  exact: false,
                  fallback: <div> Loading... </div>,
               },
               {
                  key: 'MAIN_USERS_ADD_MOVIE',
                  path: '/main/movies/add_movie',
                  component: EditMoviePage,
                  private: true,
                  exact: false,
                  fallback: <div> Loading... </div>,
               }
            ]
         }
      ]

   },
   // {
   //   path: '/protected',
   //   component: lazy(() => import('../components/Protected')),
   //   exact: false,
   //   private: true,
   //   fallback: <div> Loading... </div>
   // }
   {
      key: 'NOT_FOUND',
      path: '*',
      component: NotFound
   }
];