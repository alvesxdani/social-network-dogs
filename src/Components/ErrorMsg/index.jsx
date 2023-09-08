import React from 'react';
import { StyledErrorMsg } from './style';

function ErrorMsg({ error }) {
  if(!error) return null;
  return <StyledErrorMsg>{error}</StyledErrorMsg>;
}

export default ErrorMsg;
