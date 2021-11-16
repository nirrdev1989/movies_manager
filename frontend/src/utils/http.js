import Axios from 'axios'

const options = {
   withCredentials: true,
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
}

export const httpCall = {
   get: async function (url, params = {}) {
      return Axios({
         method: 'GET',
         url: url,
         params: params,
         ...options
      })
   },
   post: async function (url, body) {
      return Axios({
         url: url,
         method: 'POST',
         data: body,
         ...options
      })
   },
   delete: async function (url, params = {}) {
      return Axios({
         url: url,
         method: 'DELETE',
         params: params,
         ...options
      })
   },
   put: async function (url, body, params = {}) {
      return Axios({
         url: url,
         method: 'PUT',
         params: params,
         data: body,
         ...options
      })
   }
}
