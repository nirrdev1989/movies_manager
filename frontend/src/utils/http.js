import Axios from 'axios'
import { errorToast, successToast } from './toast'
import history from '../hooks/router.history'

const BASE_URL = 'http://localhost:6789/api/'



const options = {
   withCredentials: true,
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
}

Axios.interceptors.request.use((request) => {
   console.log('AXIOS MIDDALEWARE REQUEST: ', request)

   return request
}, (error) => {

   return Promise.reject(error)
})

Axios.interceptors.response.use((response) => {
   console.log('AXIOS MIDDALEWARE RESPONSE: ', response)
   const { url, method } = response.config

   if (!url.includes('auth') && method !== 'get') {
      successToast(response.data.message)
   }
   return response.data
}, (error) => {
   console.log('AXIOS MIDDALEWARE RESPONSE ERROR: ', error.response)
   const statusText = error.response.statusText
   const statusCode = error.response.status
   const message = error.response.data.message
   console.log(message, statusCode, statusText)
   if (statusCode === 401 && statusText === 'Unauthorized') {
      history.push('/home')
      return Promise.reject(message)
   }
   errorToast(message)
   return Promise.reject(message)
})

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
