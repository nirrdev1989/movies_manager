import history from '../../hooks/router.history'
import { httpCall } from '../../utils/http'
import { SUBS_ACTIONS_TYPES } from './actions.types'



export function addSubAction(data) {
   return async function (dispatch) {
      // dispatch({ type: SUBS_ACTIONS_TYPES.ADD_MOVIE_START })
      try {
         const result = await httpCall.post('http://localhost:6789/api/subs/add_sub', data)

         console.log(result.data)

         dispatch({
            type: SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MOVIES,
            payload: {
               ...data,
               movieId: data.movieId
            }
         })

         dispatch({
            type: SUBS_ACTIONS_TYPES.ADD_SUB_SUCCESS_MEMBERS,
            payload: {
               ...data,
               memberId: data.memberId,
            }
         })

         history.push('/main/subscriptions/all')
      } catch (error) {
         console.log(error.response)
         dispatch({ type: SUBS_ACTIONS_TYPES.ADD_SUB_FAIL, payload: error.response.data.message })
      }
   }
}