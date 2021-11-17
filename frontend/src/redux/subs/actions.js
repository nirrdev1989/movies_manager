import history from '../../hooks/router.history'
import { httpCall } from '../../utils/http'
import { SUBS_ACTIONS_TYPES } from './actions.types'
import { errorToast, successToast } from '../../utils/toast'



export function addSubAction(data) {
   return async function (dispatch) {
      // dispatch({ type: SUBS_ACTIONS_TYPES.ADD_MOVIE_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/subs/add_sub', data)

         console.log(result.data)
         successToast(result.data.message)
         dispatch({
            type: SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MOVIES,
            payload: {
               ...data,
               ...result.data.data
            }
         })

         dispatch({
            type: SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MEMBERS,
            payload: {
               ...data,
               ...result.data.data
            }
         })

         history.push('/main/subscriptions/all')
      } catch (error) {
         console.log(error.response)
         errorToast(error.response.data.message)
         dispatch({ type: SUBS_ACTIONS_TYPES.ADD_SUB_FAIL, payload: error.response.data.message })
      }
   }
}