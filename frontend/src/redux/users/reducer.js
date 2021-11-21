import { USERS_ACTIONS_TYPES } from "./actions.types";

const INITIAL_STATE = {
   users: null,
   error: null,
   loading: false,
}

export default function usersReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case USERS_ACTIONS_TYPES.ADD_USER_SUCCESS:
         return {
            users: [action.payload, ...state.users]
         }
      case USERS_ACTIONS_TYPES.ADD_USER_FAIL:
         return state
      case USERS_ACTIONS_TYPES.GET_USERS_SUCCESS:
         return {
            users: action.payload,
         }
      case USERS_ACTIONS_TYPES.GET_USERS_FAIL:
         return state
      case USERS_ACTIONS_TYPES.DELETE_USER_SUCCESS:
         return {
            users: state.users.filter((user) => user._id !== action.payload)
         }
      case USERS_ACTIONS_TYPES.DELETE_USER_FAIL:
         return state
      case USERS_ACTIONS_TYPES.UPDATE_USER_SUCCESS:
         state.users[action.payload.index] = action.payload.item
         return {
            users: [...state.users]
         }
      case USERS_ACTIONS_TYPES.UPADTE_USER_FAIL:
         return state
      case USERS_ACTIONS_TYPES.CHANGE_PASSWORD_USER_SUCCESS:
         return state
      case USERS_ACTIONS_TYPES.CHANGE_PASSWORD_USER_FAIL:
         return state
      default:
         return state
   }
}