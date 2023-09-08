import React from 'react'
import { StyledButton } from './style'

function Button({content, ...props}) {
  return (
    <StyledButton {...props}>{content}</StyledButton>
  )
}

export default Button