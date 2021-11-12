import React from 'react'
import { ButtonS } from '../../styles/Button'

export default function Button({ content, handler, bg, color, ...rest }) {
   return <ButtonS color={color} bg={bg || 'white'} {...rest} onClick={handler}>{content}</ButtonS>
}
