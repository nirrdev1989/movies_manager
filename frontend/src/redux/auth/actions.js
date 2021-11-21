import history from '../../hooks/router.history'
import { AUTH_ACTIONS_TYPES } from './actions.types'
// import Axios from 'axios'
// import { httpCall } from '../../utils/http'




export function authUserLoginStart() {
   return {
      type: AUTH_ACTIONS_TYPES.AUTH_USER_START,
      metaData: {
         url: 'http://localhost:6789/api/auth/isauth',
         method: 'GET',
      },
      successAction: AUTH_ACTIONS_TYPES.AUTH_USER_SECCESS,
      errorAction: AUTH_ACTIONS_TYPES.AUTH_USER_FAIL,
   }
}

export function loginActionStart(data) {
   return {
      type: AUTH_ACTIONS_TYPES.AUTH_LOGIN_START,
      metaData: {
         url: 'http://localhost:6789/api/auth/login',
         data: data,
         method: 'POST',
      },
      successAction: AUTH_ACTIONS_TYPES.AUTH_LOGIN_SUCCESS,
      errorAction: AUTH_ACTIONS_TYPES.AUTH_LOGIN_FAIL,
      globalLoader: true,
   }
}

export function registerActionStart(data) {
   return {
      type: AUTH_ACTIONS_TYPES.AUTH_REGISTER_START,
      metaData: {
         url: 'http://localhost:6789/api/auth/register',
         data: data,
         method: 'POST',
      },
      successAction: AUTH_ACTIONS_TYPES.AUTH_REGISTER_SUCCESS,
      errorAction: AUTH_ACTIONS_TYPES.AUTH_REGISTER_FAIL,
      globalLoader: true,
      redirect: function () {
         history.goBack()
      }
   }
}

export function logoutActionStart() {
   return {
      type: AUTH_ACTIONS_TYPES.AUTH_LOGOUT_START,
      metaData: {
         url: 'http://localhost:6789/api/auth/logout',
         method: 'GET',
      },
      successAction: AUTH_ACTIONS_TYPES.AUTH_LOGOUT_SUCCESS,
      errorAction: AUTH_ACTIONS_TYPES.AUTH_LOGOUT_FAIL,
      redirect: function () {
         history.push('/')
      }
   }
}
