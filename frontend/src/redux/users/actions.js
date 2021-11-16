import history from '../../hooks/router.history'
import { httpCall } from '../../utils/http'
import { errorToast, successToast } from '../../utils/toast'
import { USERS_ACTIONS_TYPES } from './actions.types'


export function addUserAction(data) {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.ADD_USER_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/users/add_user', data)

         console.log(result.data)

         dispatch({
            type: USERS_ACTIONS_TYPES.ADD_USER_SUCCESS,
            payload: {
               ...data,
               _id: result.data.data
            }
         })

         successToast(result.data.message)

         history.goBack()
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: USERS_ACTIONS_TYPES.ADD_USER_FAIL, payload: error.response.data.message })
      }
   }
}

export function deleteUserAction(id) {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.DELETE_USER_START })
      try {
         const result = await httpCall.delete('http://localhost:6789/api/users/delete/' + id)

         console.log(result.data)

         successToast(result.data.message)

         dispatch({
            type: USERS_ACTIONS_TYPES.DELETE_USER_SUCCESS,
            payload: id
         })


      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: USERS_ACTIONS_TYPES.DELETE_USER_FAIL, payload: error.response.data.message })

      }
   }
}

export function updateUserAction(id, data) {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.UPDATE_USER_START })
      try {
         const result = await httpCall.put('http://localhost:6789/api/users/update/' + id, data)

         console.log(result.data)
         successToast(result.data.message)

         dispatch({
            type: USERS_ACTIONS_TYPES.UPDATE_USER_SUCCESS,
            payload: {
               _id: id,
               ...data
            }
         })

         history.goBack()
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)

         dispatch({ type: USERS_ACTIONS_TYPES.UPADTE_USER_FAIL, payload: error.response.data.message })
      }
   }
}

export function getUsersAction() {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.GET_USERS_START })
      try {
         const result = await httpCall.get('http://localhost:6789/api/users/all')

         console.log(result.data)

         dispatch({
            type: USERS_ACTIONS_TYPES.GET_USERS_SUCCESS,
            payload: result.data.data
         })
      } catch (error) {
         console.log(error.response)
         dispatch({ type: USERS_ACTIONS_TYPES.GET_USERS_FAIL, payload: error.response.data.message })
      }
   }
}