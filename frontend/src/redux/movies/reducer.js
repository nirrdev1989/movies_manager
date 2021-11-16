import { SUBS_ACTIONS_TYPES } from "../subs/actions.types";
import { MOVIES_ACTIONS_TYPES } from "./actions.types";

const INITIAL_STATE = {
   movies: [],
   loading: false,
   error: null,
}

export default function moviesReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MOVIES:
         console.log(action.payload)
         return state


      case MOVIES_ACTIONS_TYPES.GET_MOVIES_SUCCESS:
         return {
            movies: action.payload
         }
      case MOVIES_ACTIONS_TYPES.GET_MOVIES_FAIL:
         return state
      case MOVIES_ACTIONS_TYPES.DELETE_MOVIE_SUCCESS:
         return {
            movies: state.movies.filter((movie) => movie._id !== action.payload)
         }
      case MOVIES_ACTIONS_TYPES.DELETE_MOVIE_FAIL:
         return state
      case MOVIES_ACTIONS_TYPES.UPDATE_MOVIE_SUCCESS:
         const index = state.movies.findIndex((movie) => movie._id === action.payload._id)
         state.movies[index] = action.payload

         return {
            movies: [...state.movies]
         }
      case MOVIES_ACTIONS_TYPES.UPADTE_MOVIE_FAIL:
         return state
      case MOVIES_ACTIONS_TYPES.ADD_MOVIE_SUCCESS:
         return {
            movies: [action.payload, ...state.movies]
         }
      case MOVIES_ACTIONS_TYPES.ADD_MOVIE_FAIL:
         return state
      default:
         return state
   }
}