import React from 'react';
import { StyledInput } from './style';

function Input({ label, type, onChange, value, name, error, onBlur }) {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </StyledInput>
  );
}

export default Input;
