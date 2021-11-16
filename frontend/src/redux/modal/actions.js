import { MODAL_ACTIONS_TYPES } from "./actions.types";

export function toggleModalAction(status) {
   return {
      type: MODAL_ACTIONS_TYPES.TOGGLE_MODAL,
      payload: status
   }
}