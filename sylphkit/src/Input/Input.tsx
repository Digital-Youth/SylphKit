import React, { InputHTMLAttributes } from 'react';

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  placeholder?: string;
  size?: number;
}

export const Input = ({ placeholder, size, ...props }: Props) => {
  const sizeInput = `${size}px`;

  return (
    <label>
      <input
              style={{
                  borderRadius: '5px',
                  margin: 5,
                  padding: 5,
                  width: sizeInput,
                  border: '1px solid'
              }}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};
