import { httpCall } from "../../utils/http"
import { MEMBERS_ACTIONS_TYPES } from "./actions.types"
import history from '../../hooks/router.history'

export function getMembersAction() {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.GET_MOVIES_START })
      try {
         const result = await httpCall.get('http://localhost:6789/api/members/all')

         dispatch({
            type: MEMBERS_ACTIONS_TYPES.GET_MEMBERS_SUCCESS,
            payload: result.data
         })
      } catch (error) {
         dispatch({ type: MEMBERS_ACTIONS_TYPES.GET_MEMBERS_FAIL, payload: error })
      }
   }
}


export function addMemberAction(data) {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.ADD_MOVIE_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/members/add_member', data)
         data.memberMovies = []

         dispatch({
            type: MEMBERS_ACTIONS_TYPES.ADD_MEMBER_SUCCESS,
            payload: {
               ...data,
               _id: result.data
            }
         })

         history.goBack()
      } catch (error) {
         dispatch({ type: MEMBERS_ACTIONS_TYPES.ADD_MEMBER_FAIL, payload: error })
      }
   }
}

export function deleteMemberAction(id) {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.DELETE_USER_START })
      try {
         const result = await httpCall.delete('http://localhost:6789/api/members/delete/' + id)

         dispatch({
            type: MEMBERS_ACTIONS_TYPES.DELETE_MEMBER_SUCCESS,
            payload: id
         })

      } catch (error) {
         dispatch({ type: MEMBERS_ACTIONS_TYPES.DELETE_MEMBER_FAIL, payload: error })
      }
   }
}

export function updateMemberAction(id, data, index) {
   return async function (dispatch) {
      // dispatch({ type: MEMBERS_ACTIONS_TYPES.UPDATE_USER_START })
      try {
         const result = await httpCall.put('http://localhost:6789/api/members/update/' + id, data)

         dispatch({
            type: MEMBERS_ACTIONS_TYPES.UPDATE_MEMBER_SUCCESS,
            payload: {
               index: index,
               item: {
                  _id: id,
                  ...data
               }
            }
         })

         history.goBack()
      } catch (error) {
         dispatch({ type: MEMBERS_ACTIONS_TYPES.UPADTE_MEMBER_FAIL, payload: error })
      }
   }
}