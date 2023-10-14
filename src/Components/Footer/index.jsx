import React from 'react'
import { StyledFooter } from './style'
import {ReactComponent as Dogs} from '../../Assets/dogs-footer.svg'

function Footer() {
  return (
    <StyledFooter>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </StyledFooter>
  )
}

export default Footer