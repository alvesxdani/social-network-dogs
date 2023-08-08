import React from 'react'
import { StyledButton } from './style'

function Button({text, ...props}) {
  return (
    <StyledButton {...props}>{text}</StyledButton>
  )
}

export default Button