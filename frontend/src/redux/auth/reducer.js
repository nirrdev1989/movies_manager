import { AUTH_ACTIONS_TYPES } from "./actions.types";
// import history from "../../hooks/router.history";

const INITIAL_STATE = {
   currentUser: null,
   isAuth: false,
}

export default function authReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case AUTH_ACTIONS_TYPES.AUTH_LOGIN_START:
         return state
      case AUTH_ACTIONS_TYPES.AUTH_LOGIN_SUCCESS:
         return {
            currentUser: action.payload,
            isAuth: true
         }
      case AUTH_ACTIONS_TYPES.AUTH_LOGIN_FAIL:
         return {
            currentUser: null,
            isAuth: false
         }
      case AUTH_ACTIONS_TYPES.AUTH_REGISTER_START:
         return {
            currentUser: null,
            isAuth: false
         }
      case AUTH_ACTIONS_TYPES.AUTH_REGISTER_SUCCESS:
         return state
      case AUTH_ACTIONS_TYPES.AUTH_REGISTER_FAIL:
         return state
      case AUTH_ACTIONS_TYPES.AUTH_USER_START:
         return {
            ...state,
         }
      case AUTH_ACTIONS_TYPES.AUTH_USER_SECCESS:
         return {
            isAuth: true,
            currentUser: action.payload
         }
      case AUTH_ACTIONS_TYPES.AUTH_USER_FAIL:
         // history.push('/home')
         return {
            currentUser: null,
            isAuth: false
         }
      case AUTH_ACTIONS_TYPES.AUTH_LOGOUT_START:
         return state
      case AUTH_ACTIONS_TYPES.AUTH_LOGOUT_SUCCESS:
         return {
            currentUser: null,
            isAuth: false
         }
      case AUTH_ACTIONS_TYPES.AUTH_LOGOUT_FAIL:
         return state
      default:
         return state;
   }
}