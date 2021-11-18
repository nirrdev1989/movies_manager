import history from '../../hooks/router.history'
import { httpCall } from '../../utils/http'
import { MOVIES_ACTIONS_TYPES } from './actions.types'



export function addMovieAction(data) {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.ADD_MOVIE_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/movies/add_movie', data)

         data.movieSubs = []

         dispatch({
            type: MOVIES_ACTIONS_TYPES.ADD_MOVIE_SUCCESS,
            payload: {
               ...data,
               _id: result.data
            }
         })

         history.goBack()
      } catch (error) {
         dispatch({ type: MOVIES_ACTIONS_TYPES.ADD_MOVIE_FAIL, payload: error })
      }
   }
}

export function deleteMovieAction(id) {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.DELETE_USER_START })
      try {
         const result = await httpCall.delete('http://localhost:6789/api/movies/delete/' + id)

         dispatch({
            type: MOVIES_ACTIONS_TYPES.DELETE_MOVIE_SUCCESS,
            payload: id
         })
      } catch (error) {
         dispatch({ type: MOVIES_ACTIONS_TYPES.DELETE_MOVIE_FAIL, payload: error })
      }
   }
}

export function updateMovieAction(id, data, index) {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.UPDATE_USER_START })
      try {
         const result = await httpCall.put('http://localhost:6789/api/movies/update/' + id, data)

         dispatch({
            type: MOVIES_ACTIONS_TYPES.UPDATE_MOVIE_SUCCESS,
            payload: {
               item: {
                  _id: id,
                  ...data
               },
               index: index
            }
         })

         history.goBack()
      } catch (error) {
         dispatch({ type: MOVIES_ACTIONS_TYPES.UPADTE_MOVIE_FAIL, payload: error })
      }
   }
}


export function getMoviesAction() {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.GET_MOVIES_START })
      try {
         const result = await httpCall.get('http://localhost:6789/api/movies/all')


         dispatch({
            type: MOVIES_ACTIONS_TYPES.GET_MOVIES_SUCCESS,
            payload: result.data
         })
      } catch (error) {
         dispatch({ type: MOVIES_ACTIONS_TYPES.GET_MOVIES_FAIL, payload: error })
      }
   }
}