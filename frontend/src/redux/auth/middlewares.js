import history from "../../hooks/router.history"
import { logoutActionStart } from "./actions"
import { AUTH_ACTIONS_TYPES } from "./actions.types"

export function setSessionTime({ dispatch }) {
   return function (next) {
      return function (action) {
         // if (action.type === AUTH_ACTIONS_TYPES.AUTH_USER_FAIL) {
         //    history.push('/')
         // }

         if (action.type === AUTH_ACTIONS_TYPES.AUTH_LOGIN_SUCCESS) {
            console.log(action.payload)
            setTimeout(() => {
               console.log('AUTO LOGOUT')
               dispatch(logoutActionStart())
            }, action.payload.expiresIn)
         }

         return next(action)
      }
   }
}