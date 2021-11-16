import { LOADER_ACTIONS_TYPES } from "./actions.types";

export function loaderStatusAction(status) {
   return {
      type: LOADER_ACTIONS_TYPES.LOADER_STATUS,
      payload: status
   }
}