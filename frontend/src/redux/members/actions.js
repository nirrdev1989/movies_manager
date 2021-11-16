import { httpCall } from "../../utils/http"
import { MEMBERS_ACTIONS_TYPES } from "./actions.types"
import history from '../../hooks/router.history'
import { errorToast, successToast } from "../../utils/toast";

export function getMembersAction() {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.GET_MOVIES_START })
      try {
         const result = await httpCall.get('http://localhost:6789/api/members/all')

         console.log(result.data)

         dispatch({
            type: MEMBERS_ACTIONS_TYPES.GET_MEMBERS_SUCCESS,
            payload: result.data.data
         })
      } catch (error) {
         console.log(error.response)
         dispatch({ type: MEMBERS_ACTIONS_TYPES.GET_MEMBERS_FAIL, payload: error.response.data.message })
      }
   }
}


export function addMemberAction(data) {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.ADD_MOVIE_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/members/add_member', data)

         console.log(result.data)

         successToast(result.data.message)

         dispatch({
            type: MEMBERS_ACTIONS_TYPES.ADD_MEMBER_SUCCESS,
            payload: {
               ...data,
               _id: result.data.data
            }
         })


         history.goBack()
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: MEMBERS_ACTIONS_TYPES.ADD_MEMBER_FAIL, payload: error.response.data.message })
      }
   }
}

export function deleteMemberAction(id) {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.DELETE_USER_START })
      try {
         const result = await httpCall.delete('http://localhost:6789/api/members/delete/' + id)

         console.log(result.data)

         successToast(result.data.message)

         dispatch({
            type: MEMBERS_ACTIONS_TYPES.DELETE_MEMBER_SUCCESS,
            payload: id
         })


      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: MEMBERS_ACTIONS_TYPES.DELETE_MEMBER_FAIL, payload: error.response.data.message })
      }
   }
}

export function updateMemberAction(id, data) {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.UPDATE_USER_START })
      try {
         const result = await httpCall.put('http://localhost:6789/api/members/update/' + id, data)

         console.log(result.data)

         successToast(result.data.message)
         dispatch({
            type: MEMBERS_ACTIONS_TYPES.UPDATE_MEMBER_SUCCESS,
            payload: {
               _id: id,
               ...data
            }
         })


         history.goBack()
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: MEMBERS_ACTIONS_TYPES.UPADTE_MEMBER_FAIL, payload: error.response.data.message })
      }
   }
}