import { toast } from "react-toastify";

export function successToast(message) {
   toast(message, {
      type: toast.TYPE.SUCCESS
   })
}

export function errorToast(message) {
   toast(message, {
      type: toast.TYPE.ERROR
   })
}