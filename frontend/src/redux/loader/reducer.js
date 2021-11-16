import { LOADER_ACTIONS_TYPES } from "./actions.types";


const INITIAL_STATE = {
   status: false
}

export default function loaderReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case LOADER_ACTIONS_TYPES.LOADER_STATUS:
         return {
            status: action.payload
         }
      default:
         return state
   }
}

// function loaderMiddleware({ dispatch }) {
//    return function (next) {
//       return function (action) {
//          console.log(action)
//          if (USERS_ACTIONS_TYPES[action.type]) {
//             console.log('IS HTTP')
//          }
//          next(action)
//       }
//    }
// }