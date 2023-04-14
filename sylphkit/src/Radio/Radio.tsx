import React, { InputHTMLAttributes } from 'react';

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: number;
  value?: number;
}

export const Radio = ({ label, size = 16, value, ...props }: Props) => {
  const sizeString = `${size}px`;

  return (
    <label style={{ fontSize: sizeString }}>
      <input
        style={{
          backgroundColor: 'white',
          height: sizeString,
          width: sizeString,
          borderRadius: '50%',
          margin: 5,
          marginTop: 5,
          padding: 0,
          position: 'relative',
        }}
        type="radio"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};
