import React from 'react';
import { StyledTitle } from './style';

function Title({ type, children }) {
  return (
  <StyledTitle>
    {type === 'h1' && <h1>{children}</h1>}
    {type === 'h2' && <h2>{children}</h2>}
    {type === 'h3' && <h2>{children}</h2>}
  </StyledTitle>);
}

export default Title;
