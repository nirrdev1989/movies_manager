import { SUBS_ACTIONS_TYPES } from "../subs/actions.types";
import { MEMBERS_ACTIONS_TYPES } from "./actions.types";

const INITIAL_STATE = {
   members: [],
   loading: false,
   error: null,
}

export default function membersReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MEMBERS:
         console.log(action.payload)

         return state
      case MEMBERS_ACTIONS_TYPES.GET_MEMBERS_START:
         return state
      case MEMBERS_ACTIONS_TYPES.GET_MEMBERS_SUCCESS:
         return {
            members: action.payload
         }
      case MEMBERS_ACTIONS_TYPES.GET_MEMBERS_FAIL:
         return state
      case MEMBERS_ACTIONS_TYPES.DELETE_MEMBER_SUCCESS:
         return {
            members: state.members.filter((member) => member._id !== action.payload)
         }
      case MEMBERS_ACTIONS_TYPES.DELETE_MEMBER_FAIL:
         return state
      case MEMBERS_ACTIONS_TYPES.UPDATE_MEMBER_SUCCESS:
         const index = state.members.findIndex((member) => member._id === action.payload._id)
         state.members[index] = action.payload
         return {
            members: [...state.members]
         }
      case MEMBERS_ACTIONS_TYPES.UPADTE_MEMBER_FAIL:
         return state
      case MEMBERS_ACTIONS_TYPES.ADD_MEMBER_SUCCESS:
         return {
            members: [action.payload, ...state.members]
         }
      case MEMBERS_ACTIONS_TYPES.ADD_MEMBER_FAIL:
         return state
      default:
         return state
   }
}