import { useEffect, useState } from "react"


export function useRenderContent(condition, deps) {

   const [render, setRender] = useState(true)

   useEffect(() => {
      if (condition) {
         setRender(() => false)
      }
      return () => {
         setRender(() => true)
      }
   }, [deps])

   return [render, setRender]
}