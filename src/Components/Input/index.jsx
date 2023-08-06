import React from 'react';
import { StyledInput } from './style';

function Input({ label, type, onChange, value, name }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <StyledInput 
        id={name}
        name={name}
        type={type} 
        onChange={onChange} 
        value={value} 
      />
    </div>
  );
}

export default Input;
