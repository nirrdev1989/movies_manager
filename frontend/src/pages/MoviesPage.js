import React from 'react'
import { useRouteMatch } from 'react-router'
import NavigateButton from '../components/components-utils/NavigateButton'

export default function MoviesPage() {
   const { url, path } = useRouteMatch()

   console.log('MOVIES PAGE RENDER')
   return (
      <div>
         <NavigateButton content="All Movies" url={`${url}/all`} />
         <NavigateButton content="Add Movie" url={`${url}/add_movie`} />
      </div>
   )
}
