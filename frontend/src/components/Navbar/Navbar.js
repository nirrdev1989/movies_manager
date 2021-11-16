import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
   return (
      <Nav>
         <Logo>
            Movies & Subscription management
         </Logo>
      </Nav>
   )
}


const Nav = styled.div`
     width: 100%;
     height: 50px;
     background-color: white;
     display: flex;
     align-items: center;
     box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
 `

const Logo = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-left: 1rem;
  `