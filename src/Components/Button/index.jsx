import React from 'react'
import { StyledButton } from './style'

function Button({content, icon, ...props}) {
  return (
    <StyledButton {...props}>
      {icon}
      {content}
    </StyledButton>
  )
}

export default Button