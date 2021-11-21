import React from 'react'
import { withRouter } from 'react-router'
import { ButtonS } from '../../styles/Button'

function NavigateButton({ url, content, bg, history, styles, ...rest }) {
   function handleNavigate(p) {
      history.push(p)
   }
   return (
      <ButtonS
         {...rest}
         bg={bg}
         disabled={history.location.pathname === url}
         type="button"
         onClick={() => handleNavigate(url)}>{content}
      </ButtonS>
   )
}

export default withRouter(NavigateButton)