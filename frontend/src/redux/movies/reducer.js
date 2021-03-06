import { SUBS_ACTIONS_TYPES } from "../subs/actions.types";
import { MOVIES_ACTIONS_TYPES } from "./actions.types";

const INITIAL_STATE = {
   movies: null,
   loading: false,
   error: null,
}

export default function moviesReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case MOVIES_ACTIONS_TYPES.DELETE_MEMBER_FROM_MOVIES:
      // for(const movie of movies) {
      //    for(const sub of movie.movieSubs) {

      //    }
      // }
      case SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MOVIES:
         console.log(action.payload)
         const member = action.payload.member
         const findIndex = state.movies.findIndex((m) => m._id === action.payload.movieId)
         state.movies[findIndex].movieSubs.push(member)

         return {
            ...state
         }

      case MOVIES_ACTIONS_TYPES.RESET_MOVIES_ARRAY:
         return {
            ...state,
            movies: null
         }
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
         state.movies[action.payload.index] = action.payload.item
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