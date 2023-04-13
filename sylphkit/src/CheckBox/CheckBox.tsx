import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  
}

export const Checkbox = ({ label, ...props }: Props) => {


  return (
    <label >
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
};
