import { SUBS_ACTIONS_TYPES } from "../subs/actions.types";
import { MEMBERS_ACTIONS_TYPES } from "./actions.types";

const INITIAL_STATE = {
   members: null,
   loading: false,
   error: null,
}

export default function membersReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MEMBERS:
         const movie = action.payload.movie
         const findIndex = state.members.findIndex((m) => m._id === action.payload.memberId)
         state.members[findIndex].memberMovies.push(movie)

         return {
            ...state
         }
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
         state.members[action.payload.index] = action.payload.item
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