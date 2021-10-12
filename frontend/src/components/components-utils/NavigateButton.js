import React from 'react'
import { withRouter } from 'react-router'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

function NavigateButton({ url, content, history, styles }) {
   function handleNavigate(p) {
      history.push(p)
   }
   // console.log(history.location.pathname, 'URL: ', url)

   return <button disabled={history.location.pathname === url} type="button" style={styles} onClick={() => handleNavigate(url)}>{content}</button>
}

export default withRouter(NavigateButton)