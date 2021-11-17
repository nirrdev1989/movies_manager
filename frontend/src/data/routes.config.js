import MoviesList from "../components/Movies/MoviesList";
import UsersList from "../components/Users/UsersList";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import MoviesPage from "../pages/MoviesPage";
import NotFound from "../pages/NotFound";
import UsersMangePage from "../pages/UsersMangePage";
import Loader from "../components/Loader/Loader";
import SubscriptionsPage from "../pages/SubscriptionsPage";
import MembersList from "../components/Members/MembersList";
import EditSubPage from "../pages/EditSubPage";
// import { lazy } from "react";
// component: lazy(() => import('../pages/HomePage')),


export const routesConfig = [
   {
      key: '/',
      path: '/',
      exact: true,
      redirect: '/home',
      private: false,
      fallback: <Loader />
   },
   {
      key: 'HOME',
      path: '/home',
      component: HomePage,
      exact: true,
      private: false,
      fallback: <Loader />,
      children: []
   },
   {
      key: 'HOME_REGISTER',
      path: '/register',
      component: HomePage,
      exact: true,
      private: false,
      fallback: <Loader />,
      children: []
   },
   {
      key: 'MAIN',
      path: '/main',
      component: MainPage,
      private: true,
      exact: false,
      fallback: <Loader />,
      children: [
         {
            key: 'MAIN_USERS',
            path: '/main/users',
            // redirect: '/main/users/all',
            component: UsersMangePage,
            private: true,
            exact: false,
            fallback: <Loader />,
            children: [
               {
                  key: 'MAIN_USERS_ALL',
                  path: '/main/users/all',
                  component: UsersList,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_USERS_EDIT_USER',
                  path: '/main/users/edit_user/:id',
                  component: EditSubPage,
                  private: true,
                  exact: true,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_USERS_ADD_USER',
                  path: '/main/users/add_user',
                  component: EditSubPage,
                  private: true,
                  exact: true,
                  fallback: <Loader />,
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
            fallback: <Loader />,
            children: [
               {
                  key: 'MAIN_MOVIES_ALL',
                  path: '/main/movies/all',
                  component: MoviesList,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_USERS_EDIT_MOVIE',
                  path: '/main/movies/edit_movie/:id',
                  component: EditSubPage,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_USERS_ADD_MOVIE',
                  path: '/main/movies/add_movie',
                  component: EditSubPage,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_MOVIES_ALL_ONE',
                  path: '/main/movies/:id',
                  component: MoviesList,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
            ]
         },
         {
            key: 'MAIN_SUBS',
            path: '/main/subscriptions',
            // redirect: '/main/users/all',
            component: SubscriptionsPage,
            private: true,
            exact: false,
            fallback: <Loader />,
            children: [
               {
                  key: 'MAIN_MEMBERS_ALL',
                  path: '/main/subscriptions/all',
                  component: MembersList,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_MEMBERS_EDIT_MEMBER',
                  path: '/main/subscriptions/edit_member/:id',
                  component: EditSubPage,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_MEMBERS_ADD_MEMBERS',
                  path: '/main/subscriptions/add_member',
                  component: EditSubPage,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
               {
                  key: 'MAIN_MEMBERS_ALL_ONE',
                  path: '/main/subscriptions/:id',
                  component: MembersList,
                  private: true,
                  exact: false,
                  fallback: <Loader />,
               },
            ]
         }
      ]
   },
   {
      key: 'NOT_FOUND',
      path: '*',
      component: NotFound
   }
];