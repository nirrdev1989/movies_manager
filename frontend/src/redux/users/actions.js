import history from '../../hooks/router.history'
import { httpCall } from '../../utils/http'
import { USERS_ACTIONS_TYPES } from './actions.types'


export function addUserAction(data) {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.ADD_USER_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/users/add_user', data)

         dispatch({
            type: USERS_ACTIONS_TYPES.ADD_USER_SUCCESS,
            payload: {
               ...data,
               _id: result.data.data
            }
         })

         history.goBack()
      } catch (error) {
         dispatch({ type: USERS_ACTIONS_TYPES.ADD_USER_FAIL, payload: error })
      }
   }
}

export function deleteUserAction(id) {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.DELETE_USER_START })
      try {
         const result = await httpCall.delete('http://localhost:6789/api/users/delete/' + id)

         dispatch({
            type: USERS_ACTIONS_TYPES.DELETE_USER_SUCCESS,
            payload: id
         })


      } catch (error) {
         dispatch({ type: USERS_ACTIONS_TYPES.DELETE_USER_FAIL, payload: error })
      }
   }
}

export function updateUserAction(id, data, index) {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.UPDATE_USER_START })
      try {
         const result = await httpCall.put('http://localhost:6789/api/users/update/' + id, data)

         dispatch({
            type: USERS_ACTIONS_TYPES.UPDATE_USER_SUCCESS,
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
         dispatch({ type: USERS_ACTIONS_TYPES.UPADTE_USER_FAIL, payload: error })
      }
   }
}

export function getUsersAction() {
   return async function (dispatch) {
      // dispatch({ type: USERS_ACTIONS_TYPES.GET_USERS_START })
      try {
         const result = await httpCall.get('http://localhost:6789/api/users/all')

         dispatch({
            type: USERS_ACTIONS_TYPES.GET_USERS_SUCCESS,
            payload: result.data
         })
      } catch (error) {
         dispatch({ type: USERS_ACTIONS_TYPES.GET_USERS_FAIL, payload: error })
      }
   }
}