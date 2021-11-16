import { MODAL_ACTIONS_TYPES } from "./actions.types";

const INITIAL_STATE = {
   status: false
}

export default function modalReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case MODAL_ACTIONS_TYPES.TOGGLE_MODAL:
         return {
            status: action.payload
         }
      default:
         return state
   }
}