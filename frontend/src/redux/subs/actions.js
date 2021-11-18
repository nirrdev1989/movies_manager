import history from '../../hooks/router.history'
import { httpCall } from '../../utils/http'
import { SUBS_ACTIONS_TYPES } from './actions.types'



export function addSubAction(data) {
   return async function (dispatch) {
      // dispatch({ type: SUBS_ACTIONS_TYPES.ADD_MOVIE_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/subs/add_sub', data)

         dispatch({
            type: SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MOVIES,
            payload: {
               ...data,
               ...result.data
            }
         })

         dispatch({
            type: SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MEMBERS,
            payload: {
               ...data,
               ...result.data
            }
         })

         history.push('/main/subscriptions/all')
      } catch (error) {
         dispatch({ type: SUBS_ACTIONS_TYPES.ADD_SUB_FAIL, payload: error })
      }
   }
}