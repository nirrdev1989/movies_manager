// import { showAlertAction } from "../ui/alert/actions"
// import { httpCall } from '../../utils/http'
// import { API_ACTIONS_TYPES } from "./actions.types"
// import { USERS_ACTIONS_TYPES } from "../users/actions.types"
// import { MOVIES_ACTIONS_TYPES } from "../movies/actions.types"
// import { AUTH_ACTIONS_TYPES } from "../auth/actions.types"
import axios from 'axios'
import { toast } from 'react-toastify';
import { errorToast } from '../../utils/toast';
import { loaderStatusAction } from '../loader/actions';
import { LOADER_ACTIONS_TYPES } from '../loader/actions.types';

const AUTH_ACTIONS_TYPES = {
   AUTH_REGISTER_START: 'AUTH_REGISTER_START',
   AUTH_USER_START: 'AUTH_USER_START',
   AUTH_LOGIN_START: 'AUTH_LOGIN_START',
   AUTH_LOGOUT_START: 'AUTH_LOGOUT_START'
}

const options = {
   withCredentials: true,
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
}

export function apiMiddeleware({ dispatch }) {
   return function (next) {
      return function (action) {
         console.log(action)

         if (AUTH_ACTIONS_TYPES[action.type]) {
            const { successAction, errorAction, redirect, displyToastError, globalLoader } = action

            console.log(action)

            if (globalLoader) {
               dispatch(loaderStatusAction(true))
            }

            axios({
               ...action.metaData,
               ...options
            }).then((result) => {
               console.log(result)
               if (redirect) {
                  redirect()
               }

               if (globalLoader) {
                  dispatch(loaderStatusAction(false))
               }

               dispatch({ type: successAction, payload: result.data.data })
            }).catch((error) => {
               console.log(error.response.data.message)
               dispatch({ type: errorAction, payload: error.response.data.message })

               if (globalLoader) {
                  dispatch(loaderStatusAction(false))
               }

               if (displyToastError) {
                  errorToast(error.response.data.message)
               }
            })
         }

         return next(action)
      }
   }
}