import axios from 'axios'
import { loaderStatusAction } from '../loader/actions';
import { options } from "../../utils/http";
const AUTH_ACTIONS_TYPES = {
   AUTH_REGISTER_START: 'AUTH_REGISTER_START',
   AUTH_USER_START: 'AUTH_USER_START',
   AUTH_LOGIN_START: 'AUTH_LOGIN_START',
   AUTH_LOGOUT_START: 'AUTH_LOGOUT_START'
}


export function apiMiddeleware({ dispatch }) {
   return function (next) {
      return function (action) {
         // console.log(action)

         if (AUTH_ACTIONS_TYPES[action.type]) {
            const { successAction, errorAction, redirect, globalLoader } = action

            if (globalLoader) {
               dispatch(loaderStatusAction(true))
            }

            axios({
               ...action.metaData,
               ...options
            }).then((result) => {
               if (redirect) {
                  redirect()
               }

               if (globalLoader) {
                  dispatch(loaderStatusAction(false))
               }

               dispatch({ type: successAction, payload: result.data })
            }).catch((error) => {
               dispatch({ type: errorAction, payload: error })

               if (globalLoader) {
                  dispatch(loaderStatusAction(false))
               }
            })
         }

         return next(action)
      }
   }
}