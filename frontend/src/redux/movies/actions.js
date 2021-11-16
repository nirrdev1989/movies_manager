import history from '../../hooks/router.history'
import { httpCall } from '../../utils/http'
import { errorToast, successToast } from '../../utils/toast'
import { MOVIES_ACTIONS_TYPES } from './actions.types'



export function addMovieAction(data) {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.ADD_MOVIE_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/movies/add_movie', data)

         console.log(result.data)

         successToast(result.data.message)
         dispatch({
            type: MOVIES_ACTIONS_TYPES.ADD_MOVIE_SUCCESS,
            payload: {
               ...data,
               _id: result.data.data
            }
         })

         history.goBack()
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: MOVIES_ACTIONS_TYPES.ADD_MOVIE_FAIL, payload: error.response.data.message })
      }
   }
}

export function deleteMovieAction(id) {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.DELETE_USER_START })
      try {
         const result = await httpCall.delete('http://localhost:6789/api/movies/delete/' + id)

         console.log(result.data)
         successToast(result.data.message)
         dispatch({
            type: MOVIES_ACTIONS_TYPES.DELETE_MOVIE_SUCCESS,
            payload: id
         })
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: MOVIES_ACTIONS_TYPES.DELETE_MOVIE_FAIL, payload: error.response.data.message })
      }
   }
}

export function updateMovieAction(id, data) {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.UPDATE_USER_START })
      try {
         const result = await httpCall.put('http://localhost:6789/api/movies/update/' + id, data)

         console.log(result.data)
         successToast(result.data.message)
         dispatch({
            type: MOVIES_ACTIONS_TYPES.UPDATE_MOVIE_SUCCESS,
            payload: {
               _id: id,
               ...data
            }
         })

         history.goBack()
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: MOVIES_ACTIONS_TYPES.UPADTE_MOVIE_FAIL, payload: error.response.data.message })
      }
   }
}


export function getMoviesAction() {
   return async function (dispatch) {
      // dispatch({ type: MOVIES_ACTIONS_TYPES.GET_MOVIES_START })
      try {
         const result = await httpCall.get('http://localhost:6789/api/movies/all')

         console.log(result.data)

         dispatch({
            type: MOVIES_ACTIONS_TYPES.GET_MOVIES_SUCCESS,
            payload: result.data.data
         })
      } catch (error) {
         console.log(error.response)
         dispatch({ type: MOVIES_ACTIONS_TYPES.GET_MOVIES_FAIL, payload: error.response.data.message })
      }
   }
}